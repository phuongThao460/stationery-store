import mongoose from "mongoose";

// ==================================================
// 				SCHEMA DEFINITION
// ==================================================

const schema = new mongoose.Schema(
  {
    ten_chat_lieu: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

export const CHAT_LIEU_Model = mongoose.model("CHAT_LIEU", schema);

// ==================================================
// 				FUNCTIONS DEFINITION
// ==================================================

export const Update = async (chat_lieu) => {
  /*
  Update chat lieu

  :return: json
  */

  try {
    var id_chat_lieu = chat_lieu._id;
    var new_chat_lieu = await CHAT_LIEU_Model.findOneAndUpdate(
      { _id: id_chat_lieu },
      chat_lieu,
      { new: true }
    );
    return new_chat_lieu;
  } catch (err) {
    throw err;
  }
};
