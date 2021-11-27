import mongoose from "mongoose";
import { PHUONG_Model } from "../models/PHUONG_Model.js";

export const Get_Phuongs = async (req, res) => {
  /*
  Fetch all phuong in db
  :return: Array
  */

  try {
    const phuongs = await PHUONG_Model.find()
      .populate({
        path: "id_quan",
        select: "quan_huyen",
        populate: {
          path: "id_thanh_pho",
          select: "ten_thanh_pho"
        }
      })
    console.log("phuongs", phuongs);
    res.status(200).json(phuongs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_Phuong_By_ID = async (req, res) => {
  /*
  Fetch phuong by id
  :return: json, null if not found anything
  */
  
  try {
    const _id = req.body._id;
    const phuong = await PHUONG_Model.findById(_id)
      .populate({
        path: "id_quan",
        select: "quan_huyen",
        populate: {
          path: "id_thanh_pho",
          select: "ten_thanh_pho"
        }
      })
    console.log("phuong", phuong);
    res.status(200).json(phuong);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
