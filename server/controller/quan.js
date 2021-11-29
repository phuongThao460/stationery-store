import mongoose from "mongoose";
import { QUAN_Model } from "../models/QUAN_Model.js";

export const Get_Quans = async (req, res) => {
  /*
  Fetch all quan in db
  :return: Array
  */

  try {
    const quans = await QUAN_Model.find()
      .populate({
        path: "id_thanh_pho",
        select: "ten_thanh_pho",
      })
    console.log("quans", quans);
    res.status(200).json(quans);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_Quan_By_ID = async (req, res) => {
  /*
  Fetch quan by id
  :return: json, null if not found anything
  */
  
  try {
    const _id = req.body._id;
    const quan = await QUAN_Model.findById(_id)
      .populate({
        path: "id_thanh_pho",
        select: "ten_thanh_pho",
      })
    console.log("quan", quan);
    res.status(200).json(quan);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_Quan_By_ID_Thanh_Pho = async (req, res) => {
  /*
  Fetch quan by id thanh pho
  :return: array
  */

  try {
    const id_thanh_pho = req.body.id_thanh_pho
    const quan = await QUAN_Model.find({ id_thanh_pho: id_thanh_pho })
      .populate('id_thanh_pho')
      .exec()
    if (quan.length == 0) {
      console.log('Quans is empty')
    }
    res.status(200).json(quan)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}