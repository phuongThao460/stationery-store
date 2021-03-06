import mongoose from "mongoose";
import { Find_TKKH_By_TTKH } from "./TKKH_Model.js";

// ==========================================
//              MODEL DEFINITIONS
// ==========================================

const schema = new mongoose.Schema(
  {
    id_tkkh: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "TAI_KHOAN_KHACH_HANG",
    },
    id_san_pham: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "SAN_PHAM",
    },
    noi_dung_danh_gia: {
      type: String,
      required: true,
      default: "",
    },
    so_sao_danh_gia: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Must at least 0, got {VALUE}"],
      max: [5, "Must at most 5, got { VALUE }"],
    },
    tinh_trang: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export const DANH_GIA_Model = mongoose.model("DANH_GIA", schema);

// ==========================================
//              FUNCTION DEFINITIONS
// ==========================================

export const Set_Tinh_Trang_Danh_Gia = (danh_gia, status) => {
  /*
	Set or update tinh trang for danh_gia
	*/

  danh_gia.tinh_trang = status;
  return danh_gia;
};

export const Find_All_Danh_Gia_In_DB = async () => {
  /*
  Find all danh gia in db

  :return: array
  */

  try {
    var danh_gias = await DANH_GIA_Model.find()
      .populate({ path: "id_san_pham", select: "ten_sp" })
      .populate({ path: "id_tkkh", select: "email" });
    return danh_gias;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Find_Danh_Gia_By_ID = async (id_danh_gia) => {
  /*
  Find danh gia by _id

  :return: json
  */

  try {
    var danh_gia = await DANH_GIA_Model.findById(id_danh_gia);
    return danh_gia;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Create = async (danh_gia) => {
  /*
  Create and save new danh gia to db

  :return: json
  */

  try {
    var danh_gia = new DANH_GIA_Model(danh_gia);
    danh_gia = await danh_gia.save();
    return danh_gia;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Update = async (new_danh_gia) => {
  /*
  Update danh gia

  :return: json
  */

  try {
    var id_danh_gia = new_danh_gia._id;

    var danh_gia = await DANH_GIA_Model.findOneAndUpdate(
      { _id: id_danh_gia },
      new_danh_gia,
      { new: true }
    );

    return danh_gia;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Get_List_FeedBack_From_TTKH = async (id_ttkh) => {
  /*
  Get list feedback from id_ttkh

  :return: Array
  */

  try {
    const tkkh = await Find_TKKH_By_TTKH(id_ttkh);
    if (tkkh == null) {
      return null;
    }

    const id_tkkh = tkkh._id;
    const feedbacks = await DANH_GIA_Model.find({
      id_tkkh: mongoose.Types.ObjectId(id_tkkh),
    }).populate({ path: "id_san_pham", select: "ten_sp" });
    return feedbacks;
  } catch (err) {
    throw err;
  }
};

export const Get_List_FeedBack_From_SanPham = async (id_san_pham) => {
  /*
  Get list feedback from id_san_pham

  :return: Array
  */

  try {
    const feedbacks = await DANH_GIA_Model.find({
      id_san_pham: mongoose.Types.ObjectId(id_san_pham),
      tinh_trang: true,
    }).populate({
      path: "id_tkkh",
      select: "id_ttkh",
      populate: {
        path: "id_ttkh",
        select: "ten_kh",
      },
    });
    return feedbacks;
  } catch (err) {
    throw err;
  }
};
