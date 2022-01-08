import mongoose from "mongoose";

// =======================================================
// 					SCHEMA DEFINITION
// =======================================================

const schema = new mongoose.Schema(
  {
    ten_loai_sp: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

export const LOAI_SP_Model = mongoose.model("LOAI_SAN_PHAM", schema);

// =======================================================
// 					FUNCTIONS DEFINITION
// =======================================================

export const Update = async (loai_sp) => {
  /*
  Update loai sp

  :return: json
  */

  try {
    var id_loai_sp = loai_sp._id;
    var new_loai_sp = await LOAI_SP_Model.findOneAndUpdate(
      { _id: id_loai_sp },
      loai_sp,
      { new: true }
    );
    return new_loai_sp;
  } catch (err) {
    throw err;
  }
};
