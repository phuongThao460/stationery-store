import mongoose from "mongoose";
import { SANPHAM_Model } from "../models/SANPHAM_Model.js";

export const Get_San_Phams = async (req, res) => {
  try {
    const san_phams = await SANPHAM_Model.find()
      .populate({
        path: "id_loai_sp",
        select: "ten_loai_sp",
      })
      .populate({
        path: "id_nha_cc",
        select: "ten_nha_cc",
      })
      .populate({
        path: "id_chat_lieu",
        select: "ten_chat_lieu",
      })
      .populate({
        path: "id_phan_loai",
        select: "ten_phan_loai"
      })
    console.log("san_phams", san_phams);
    res.status(200).json(san_phams);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_San_Pham_By_ID = async (req, res) => {
  try {
    const san_pham_id = req.body._id;
    const san_pham = await SANPHAM_Model.findById(san_pham_id)
      .populate({
        path: "id_loai_sp",
        select: "ten_loai_sp",
      })
      .populate({
        path: "id_nha_cc",
        select: "ten_nha_cc",
      })
      .populate({
        path: "id_chat_lieu",
        select: "ten_chat_lieu",
      })
      .populate({
        path: "id_phan_loai",
        select: "ten_phan_loai"
      })
    console.log("san_pham", san_pham);
    res.status(200).json(san_pham);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Find_San_Pham_By_Id = async (id_san_pham) => {
  try {
    const san_pham = await SANPHAM_Model.findById(id_san_pham);
    return san_pham;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const Create_San_Pham = async (req, res) => {
  try {
    const new_san_pham = req.body;
    const san_pham = new SANPHAM_Model(new_san_pham);
    await san_pham.save();

    res.status(200).json(san_pham);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

export const Update_San_Pham = async (req, res) => {
  try {
    const update_sp = req.body;

    const sp = await SANPHAM_Model.findOneAndUpdate(
      { _id: update_sp._id },
      update_sp,
      { new: true }
    );
    console.log(sp);
    res.status(200).json(sp);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

export const Add_Color = async (req, res) => {
  try {
    const id_update_sp = req.body._id;
    let id_color = req.body.id_mau_sac;

    const sp = await SANPHAM_Model.findOneAndUpdate(
      { _id: id_update_sp },
      { $push: { id_mau_sac: id_color } },
      { new: true }
    );
    console.log(sp);
    res.status(200).json(sp);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};
