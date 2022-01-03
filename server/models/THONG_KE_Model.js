import mongoose from "mongoose";

import { DON_HANG_Model } from "./DON_HANG_Model.js";
import { CT_DON_HANG_Model } from "./CT_DON_HANG_Model.js";

// ================================================
//                 SCHEMA DEFINITIONS
// ================================================

const schema = new mongoose.Schema(
  {
    ngay_bat_dau: {
      require: true,
      type: Date,
      default: new Date(),
    },
    ngay_ket_thuc: {
      type: Date,
      require: true,
    },
    tong_tien_san_pham_ban_duoc: {
      type: Number,
      require: true,
      default: 0,
    },
    tong_tien_giam_boi_voucher: {
      type: Number,
    },
    tong_doanh_thu: {
      type: Number,
      require: true,
      default: 0,
    },
    tong_gia_nhap: {
      type: Number,
      require: true,
      default: 0,
    },
    tong_loi_nhuan: {
      type: Number,
      require: true,
      default: 0,
    },
    id_nv: {
      type: mongoose.Types.ObjectId,
      ref: "NHAN_VIEN",
      require: true,
    },
  },
  { timestamps: false }
);

export const THONG_KE_Model = mongoose.model("THONG_KE", schema);

// ================================================
//                 FUNCTION DEFINITIONS
// ================================================

export const Add_CT_Thong_Ke = async (ct_tk) => {
  /*
	Add new ct_thong_ke to DB
	:return: obj
	*/

  try {
    await ct_tk.save(ct_tk);
    return ct_tk;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const Add_Thong_Ke = async (thong_ke) => {
  /*
	Add new thong ke to DB
	:return: obj
	*/

  try {
    await thong_ke.save();
    return thong_ke;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const Find_Hoa_Don_By_Date = async (ngay_bat_dau, ngay_ket_thuc) => {
  /*
	Find HOA DON by date
	:return: Array
	*/

  ngay_bat_dau = new Date(ngay_bat_dau);
  ngay_ket_thuc = new Date(ngay_ket_thuc);

  try {
    var rs = await DON_HANG_Model.aggregate([
      // Stage 1: find HOA DON where ngay_bat_dau <= ngay_giao <= ngay_ket_thuc
      {
        $match: {
          ngay_giao: {
            $gte: ngay_bat_dau,
            $lte: ngay_ket_thuc,
          },
        },
      },
    ]).exec();

    return rs;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const Compute_Tong_Tien_By_Don_Hangs = (don_hangs) => {
  /*
	Compute tong_tien_san_pham_ban_duoc, tong_gia_giam_boi_voucher, tong_doanh_thu
	:return: Array, length = 3, eg: [tong_tien_san_pham_ban_duoc,
									tong_gia_giam_boi_voucher,
									tong_doanh_thu]
	*/

  var tong_tien_san_pham_ban_duoc = 0;
  var tong_tien_giam_boi_voucher = 0;
  var tong_doanh_thu = 0;

  for (const indices in don_hangs) {
    var don_hang = don_hangs[indices];
    tong_tien_san_pham_ban_duoc += don_hang.tong_phu;
    tong_tien_giam_boi_voucher += don_hang.tong_gia_giam_boi_voucher;
    tong_doanh_thu += don_hang.tong_tien;
  }

  return [
    tong_tien_san_pham_ban_duoc,
    tong_tien_giam_boi_voucher,
    tong_doanh_thu,
  ];
};

export const Find_San_Pham_By_ID_Don_Hangs = async (id_don_hangs) => {
  /*
	Find san pham, gia nhap, gia ban, sum(so_luong), sum(tong_gia) 
	by id_don_hangs

	:return: Array
	*/

  try {
    var rs = await CT_DON_HANG_Model.aggregate([
      // Stage 1: Find ct_dh by array id_don_hang
      { $match: { id_don_hang: { $in: id_don_hangs } } },

      // Stage 2: Get ten_san_pham, gia_nhap by id_san_pham
      {
        $lookup: {
          from: "san_phams",
          localField: "id_san_pham",
          foreignField: "_id",
          as: "san_pham",
        },
      },

      // Stage 4: Reshape document
      {
        $project: {
          san_pham: { $arrayElemAt: ["$san_pham", 0] },
          gia_ban: 1,
          so_luong: 1,
          tong_gia: 1,
          mau_sac: 1,
          _id: 0,
        },
      },

      // Stage 5: Group by id_san_pham, gia_nhap, gia_ban, mau_sac,
      //          then SUM(so_luong), SUM(tong_gia)
      {
        $group: {
          _id: {
            id_san_pham: "$san_pham._id",
            gia_ban: "$gia_ban",
            gia_nhap: "$san_pham.don_gia_nhap",
            //mau_sac: "$mau_sac",
          },
          tong_so_luong_da_ban: { $sum: "$so_luong" },
          tong_tien: { $sum: "$tong_gia" },
        },
      },
    ]).exec();

    return rs;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const Compute_Tong_Tien_By_CT_Thong_Kes = (ct_thong_kes, thong_ke) => {
  /*
	Compute tong_gia_nhap, tong_doanh_thu, tong_loi_nhuan 

	:return: Array, length = 3, [tong_gia_nhap, tong_doanh_thu, tong_loi_nhuan]
	
	tong_gia_nhap = SUM(SUM(so_luong) * gia_nhap)
	tong_doanh_thu = tong_tien_san_pham_ban_duoc - tong_giam_boi_voucher 
	tong_loi_nhuan = tong_doanh_thu - tong_gia_nhap
	*/

  var tong_gia_nhap = 0;
  var tong_doanh_thu = 0;
  var tong_loi_nhuan = 0;

  // Compute tong_gia_nhap
  for (var ct_thong_ke of ct_thong_kes) {
    tong_gia_nhap +=
      ct_thong_ke._id.gia_nhap * ct_thong_ke.tong_so_luong_da_ban;
  }

  // Compute tong_doanh_thu
  tong_doanh_thu =
    thong_ke.tong_tien_san_pham_ban_duoc - thong_ke.tong_tien_giam_boi_voucher;

  // Compute tong_loi_nhuan
  tong_loi_nhuan = tong_doanh_thu - tong_gia_nhap;

  return [tong_gia_nhap, tong_doanh_thu, tong_loi_nhuan];
};
