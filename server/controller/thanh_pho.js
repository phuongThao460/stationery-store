import mongoose from "mongoose";
import { THANH_PHO_Model } from "../models/THANH_PHO_Model.js";

export const Get_Thanh_Phos = async (req, res) => {
  /*
  Fetch all thanh pho in db
  :return: Array
  */

  try {
    const thanh_pho_s = await THANH_PHO_Model.find()
    //console.log("thanh_phos", thanh_pho_s);
    res.status(200).json(thanh_pho_s);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_Thanh_Pho_By_ID = async (req, res) => {
  /*
  Fetch thanh pho by id
  :return: json, null if not found anything
  */

  try {
    const thanh_pho_id = req.body._id;
    const thanh_pho = await THANH_PHO_Model.findById(thanh_pho_id)
    //console.log("thanh_pho", thanh_pho);
    res.status(200).json(thanh_pho);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};


