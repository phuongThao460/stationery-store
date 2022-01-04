import mongoose from "mongoose";

// =====================================================
//				MODEL DEFINITIONS
// =====================================================

const schema = new mongoose.Schema(
  {
    ten_sp: {
      type: String,
      required: true,
    },
    so_luong: {
      type: Number,
      required: true,
    },
    ngay_nhap: {
      type: Date,
      required: true,
    },
    mo_ta: {
      type: String,
    },
    don_gia_nhap: {
      type: Number,
      required: true,
    },
    gia_ban_goc: {
      type: Number,
      required: true,
    },
    gia_ban_hien_tai: {
      type: Number,
      required: true,
    },
    id_loai_sp: {
      type: mongoose.Types.ObjectId,
      ref: "LOAI_SAN_PHAM",
      required: true,
    },
    id_nha_cc: {
      type: mongoose.Types.ObjectId,
      ref: "NHA_CUNG_CAP",
      required: true,
    },
    mau_sac: [
      {
        type: String,
        required: false,
      },
    ],
    id_chat_lieu: {
      type: mongoose.Types.ObjectId,
      ref: "CHAT_LIEU",
      required: true,
    },
    ti_le_danh_gia: {
      type: Number,
      default: 0,
    },
    id_phan_loai: {
      type: mongoose.Types.ObjectId,
      ref: "PHAN_LOAI",
    },
  },
  { timestamps: false }
);

export const SANPHAM_Model = mongoose.model("SAN_PHAM", schema);

// =====================================================
//				FUNCTION DEFINITIONS
// =====================================================

export const Update_San_Pham = async (san_pham) => {
  /*
  Update san pham

  :return: json
  */

  try {
    var sp_id = san_pham._id;
    var updated_nv = await SANPHAM_Model.findOneAndUpdate(
      { _id: sp_id },
      san_pham,
      { new: true }
    );
    return updated_nv;
  } catch (err) {
    throw err;
  }
};

export const Find_San_Pham_By_Id = async (id_san_pham) => {
  /*
  Find san-pham by id

  :return: json
  */

  try {
    var san_pham = await SANPHAM_Model.findById(id_san_pham);
    return san_pham;
  } catch (err) {
    throw err;
  }
};
