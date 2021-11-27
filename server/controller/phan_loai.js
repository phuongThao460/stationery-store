import mongoose from "mongoose";
import { PHAN_LOAI_Model } from "../models/PHAN_LOAI_Model.js";

export const Get_Phan_Loais = async (req, res) => {
  /*
  Fetch all phan loai in db
  :return: Array
  */

  try {
    const phan_loais = await PHAN_LOAI_Model.find()
    console.log("phan_loais", phan_loais);
    res.status(200).json(phan_loais);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_Phan_Loai_By_ID = async (req, res) => {
  /*
  Fetch phan loai by id
  :return: json, null if not found anything
  */

  try {
    const phan_loai_id = req.body._id;
    const phan_loai = await PHAN_LOAI_Model.findById(phan_loai_id)
    console.log("phan_loai", phan_loai);
    res.status(200).json(phan_loai);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};


