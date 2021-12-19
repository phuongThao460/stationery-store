import mongoose from "mongoose";
import { DON_HANG_Model } from "./DON_HANG_Model.js";

// ======================================================================
// 							SCHEMA DEFINITION
// ======================================================================

const schema = new mongoose.Schema(
  {
    id_san_pham: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "SAN_PHAM",
    },
    id_don_hang: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "DON_HANG",
    },
    gia_ban: {
      type: Number,
      required: true,
    },
    so_luong: {
      type: Number,
      required: true,
      min: [1, "Must at least 1, got {VALUE}"],
    },
    tong_gia: {
      type: Number,
      required: true,
      min: [1, "Must at least 1, got {VALUE}"],
    },
    mau_sac: {
      type: Array,
      required: true,
    },
  },
  { timestamps: false }
);

export const CT_DON_HANG_Model = mongoose.model("CT_DON_HANG", schema);

// ======================================================================
// 							FUNCTION DEFINITION
// ======================================================================

export const Find_CTDH_By_ID_TTKH = async (id_ttkh) => {
  /*
	Find ctdh by id_ttkh
	
	:return: array
	*/

  try {
    var san_pham_field_not_show = {
      "san_pham.so_luong": 0,
      "san_pham.ngay_nhap": 0,
      "san_pham.mo_ta": 0,
      "san_pham.don_gia_nhap": 0,
      "san_pham.gia_ban_goc": 0,
      "san_pham.gia_ban_hien_tai": 0,
      "san_pham.id_loai_sp": 0,
      "san_pham.id_nha_cc": 0,
      "san_pham.id_chat_lieu": 0,
      "san_pham.ti_le_danh_gia": 0,
      "san_pham.id_pham_loai": 0,
      "san_pham.mau_sac": 0,
    };

    var rs = await DON_HANG_Model.aggregate([
      // Stage 1: Find don_hang by id_ttkh
      { $match: { id_ttkh: mongoose.Types.ObjectId(id_ttkh) } },

      // Stage 2: Lookup at CTDH to find ctdh by id_dh
      {
        $lookup: {
          from: "ct_don_hangs",
          localField: "_id",
          foreignField: "id_don_hang",
          as: "ct_dh",
        },
      },

      // Stage 3: Lookup at SANPHAM to find ten_san_pham
      {
        $lookup: {
          from: "san_phams",
          localField: "ct_dh.id_san_pham",
          foreignField: "_id",
          as: "san_pham",
        },
      },

      // Stage 4:
      {
        $project: {
          ...san_pham_field_not_show,
        },
      },
    ]).exec();

    return rs;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const Find_CTDH_By_DonHang = async (id_dh) => {
  /*
  Find ctdh by id_don_hang

  :return: Array
  */

  try {
    var ctdh = await CT_DON_HANG_Model.find({ id_don_hang: id_dh });
    return ctdh;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
