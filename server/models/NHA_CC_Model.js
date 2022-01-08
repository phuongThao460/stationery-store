import mongoose from "mongoose";

// ==================================================
// 				SCHEMA DEFINITION
// ==================================================

const schema = new mongoose.Schema(
  {
    ten_nha_cc: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

export const NHA_CC_Model = mongoose.model("NHA_CUNG_CAP", schema);

// ==================================================
// 				FUNCTIONS DEFINITION
// ==================================================

export const Update = async (nha_cc) => {
  /*
  Update nha cung cap

  :return: json
  */

  try {
    var id_nha_cc = nha_cc._id;
    var new_nha_cc = await NHA_CC_Model.findOneAndUpdate(
      { _id: id_nha_cc },
      nha_cc,
      { new: true }
    );
    return new_nha_cc;
  } catch (err) {
    throw err;
  }
};
