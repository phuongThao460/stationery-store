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
    ten_nv: {
      type: String,
      required: true,
    },
    sdt: {
      type: String,
      required: true,
    },
    gioi_tinh: {
      type: Boolean,
      required: true,
    },
    dia_chi: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
      default: 1,
      min: [0],
      max: [1],
    },
  },
  { timestamps: true }
);

export const NHAN_VIEN_Model = mongoose.model("NHAN_VIEN", schema);

// ==========================================
//              FUNCTION DEFINITIONS
// ==========================================

export const Add_NV = async (nhan_vien) => {
  /*
  Create and save new nhan_vien to db

  :return: json
  */

  try {
    var new_nhan_vien = await NHAN_VIEN_Model(nhan_vien);
    new_nhan_vien = new_nhan_vien.save();
    return new_nhan_vien;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Update_NV = async (nhan_vien) => {
  /*
  Update nhan vien

  :return: json
  */

  try {
    var id_nv = nhan_vien._id;
    var updated_nv = await NHAN_VIEN_Model.findOneAndUpdate(
      { _id: id_nv },
      nhan_vien,
      { new: true }
    );
    return updated_nv;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Find_NV_By_ID = async (id_nv) => {
  /*
  Find nhan_vien by id

  :return: json
  */

  try {
    var nhan_vien = await NHAN_VIEN_Model.findById(id_nv);
    return nhan_vien;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Find_All = async () => {
  /*
  Find all nhan_vien in db

  :return: array
  */

  try {
    var nhan_viens = await NHAN_VIEN_Model.find();
    return nhan_viens;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
