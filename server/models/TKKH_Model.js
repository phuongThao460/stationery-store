import mongoose from "mongoose";

// ==========================================
//              MODEL DEFINITIONS
// ==========================================

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    id_ttkh: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "THONG_TIN_KHACH_HANG",
    },
    id_voucher: [
      {
        type: mongoose.Types.ObjectId,
        default: [],
        ref: "VOUCHER",
      },
    ],
    wish_list: [
      {
        type: mongoose.Types.ObjectId,
        default: [],
        ref: "SAN_PHAM",
      },
    ],
    ngay_tao_tk: {
      type: Date,
      default: new Date(),
    },
    san_pham_cho_danh_gia: [
      {
        type: mongoose.Types.ObjectId,
        default: [],
        ref: "SAN_PHAM",
      },
    ],
  },
  { timestamps: false }
);

export const TK_KH_Model = mongoose.model("TAI_KHOAN_KHACH_HANG", schema);

// ==========================================
//              FUNCTION DEFINITIONS
// ==========================================

export const Add_Voucher = async (id_tkkh, id_voucher) => {
  /*
	Add voucher for tkkh
	*/

  try {
    const tkkh = await TK_KH_Model.findOneAndUpdate(
      { _id: id_tkkh },
      { $push: { id_voucher: id_voucher } },
      { new: true }
    );
    console.log(tkkh);
    return tkkh;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Add_San_Pham_To_Feedback = async (id_tkkh, id_sp) => {
  /*
  Add san_pham to san_pham_cho_danh_gia
  */

  try {
    if (!(await Does_SanPham_Exist_In_List_Feedback(id_tkkh, id_sp))) {
      await TK_KH_Model.findOneAndUpdate(
        { _id: id_tkkh },
        { $push: { san_pham_cho_danh_gia: id_sp } },
        { new: true }
      );
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Remove_Voucher_From_TTKH = async (id_ttkh, id_voucher) => {
  /*
  After using voucher, the voucher will be automatically 
  removed from list voucher
  */

  try {
    const tkkh = await TK_KH_Model.findOneAndUpdate(
      { id_ttkh: id_ttkh },
      { $pull: { id_voucher: id_voucher } },
      { new: true }
    );
    //console.log(tkkh);
    return tkkh;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Remove_SanPham_From_List_Feedback = async (id_tkkh, id_sp) => {
  /*
  After feedback, san_pham will be automatically removed from list 
  san_pham_cho_danh_gia
  */

  try {
    const tkkh = await TK_KH_Model.findOneAndUpdate(
      { _id: id_tkkh },
      { $pull: { san_pham_cho_danh_gia: id_sp } },
      { new: true }
    );
    return tkkh;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Find_TKKH_By_TTKH = async (id_ttkh) => {
  /*
  Find tkkh by id_ttkh

  :return: json, null if not found anything
  */

  try {
    const tkkh = await TK_KH_Model.findOne({ id_ttkh: id_ttkh });
    return tkkh;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const Does_SanPham_Exist_In_List_Feedback = async (id_tkkh, id_sp) => {
  /*
  Check whether san_pham exist in san_pham_cho_danh_gia

  :return: Boolean
  */

  var tkkh = await TK_KH_Model.findById(id_tkkh);

  if (tkkh != null) {
    var sp_cho_danh_gia = tkkh.san_pham_cho_danh_gia;

    if (sp_cho_danh_gia == null) {
      return false;
    }

    const sp = sp_cho_danh_gia.find((ele) => ele == id_sp);

    if (sp != null) {
      return true;
    }
  }

  return false;
};

const Does_SanPham_Exist_In_WishList = async (id_tkkh, id_sp) => {
  /*
  Check whether san_pham exist in wishlist

  :return: Boolean
  */

  var tkkh = await TK_KH_Model.findById(id_tkkh);

  if (tkkh != null) {
    var wish_list = tkkh.wish_list;

    if (wish_list == null) {
      return false;
    }

    const sp = wish_list.find((ele) => ele == id_sp);

    if (sp != undefined) {
      return true;
    }
  }

  return false;
};

export const Add_SanPham_To_WishList = async (id_tkkh, id_sp) => {
  /*
  Add san pham to wish list

  :return: json, null if san_pham existed in wishlist
  */

  try {
    if (!(await Does_SanPham_Exist_In_WishList(id_tkkh, id_sp))) {
      const tkkh = await TK_KH_Model.findOneAndUpdate(
        { _id: id_tkkh },
        { $push: { wish_list: id_sp } },
        { new: true }
      );
      return tkkh;
    }
    return null;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Remove_SanPham_From_WishList = async (id_tkkh, id_sp) => {
  /*
  Remove san_pham from wishlist

  :return: json
  */

  try {
    const tkkh = await TK_KH_Model.findOneAndUpdate(
      { _id: id_tkkh },
      { $pull: { wish_list: id_sp } },
      { new: true }
    );
    return tkkh;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Get_FeedBack_Product_By_TTKH = async (id_ttkh) => {
  /*
  Get danh sach san pham can danh gia theo id_ttkh

  :return: array
  */

  try {
    var rs = await TK_KH_Model.findOne({ id_ttkh: id_ttkh })
      .select(["san_pham_cho_danh_gia"])
      .populate({ path: "san_pham_cho_danh_gia", select: "ten_sp" });
    return rs;
  } catch (err) {
    throw err;
  }
};

export const Get_WishList_By_TTKH = async (id_ttkh) => {
  /*
  Get wishlist theo id_ttkh

  :return: array
  */

  try {
    var rs = await TK_KH_Model.findOne({ id_ttkh: id_ttkh })
      .select(["wish_list"])
      .populate({ path: "wish_list", select: "ten_sp" });
    return rs;
  } catch (err) {
    throw err;
  }
};

export const Get_FeedBack_Count = async (id_tkkh) => {
  /*
  Get number of feedback product by id_tkkh

  :return: Number
  */

  try {
    const tkkh = await TK_KH_Model.findById(id_tkkh);
    if (tkkh != null) {
      return tkkh.san_pham_cho_danh_gia.length;
    }
    return 0;
  } catch (err) {
    throw err;
  }
};

export const Get_Voucher_Count = async (id_tkkh) => {
  /*
  Get number of voucher by id_tkkh

  :return: Number
  */

  try {
    const tkkh = await TK_KH_Model.findById(id_tkkh);
    if (tkkh != null) {
      return tkkh.id_voucher.length;
    }
    return 0;
  } catch (err) {
    throw err;
  }
};
