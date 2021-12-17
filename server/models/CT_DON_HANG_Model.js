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
    ]).exec();

    return rs;
  } catch (err) {
    console.log(err);
    return err;
  }
};
