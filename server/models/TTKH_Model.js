import mongoose from "mongoose";

// ================================================
//  				SCHEMA DEFINITIONS
// ================================================

const schema = new mongoose.Schema(
  {
    ten_kh: {
      type: String,
      required: true,
    },
    sdt: {
      type: String,
      required: true,
    },
    dia_chi: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    diem_tich_luy: {
      type: String,
      default: 0,
    },
    gioi_tinh: {
      type: Boolean,
      required: true,
    },
    id_phuong: {
      type: mongoose.Types.ObjectId,
      ref: "PHUONG",
      required: true,
    },
  },
  { timestamps: true }
);

export const TT_KH_Model = mongoose.model("THONG_TIN_KHACH_HANG", schema);

// ================================================
//  				FUNCTION DEFINITIONS
// ================================================

export const Update = async (new_tt_kh) => {
  /*
   	Update thong_tin_khach_hang

   	:return: json
   	*/

  try {
    var id_ttkh = new_tt_kh._id;

    const ttkh = await TT_KH_Model.findOneAndUpdate(
      { _id: id_ttkh },
      new_tt_kh,
      { new: true }
    );

    return ttkh;
  } catch (err) {
    console.log(err);
    return err;
  }
};
