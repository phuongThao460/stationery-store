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
    res.status(500).json({ error: err });
    console.log(err);
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
    return err;
  }
};
