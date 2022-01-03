import {
  Add_NV,
  Update_NV,
  Find_All,
  Find_NV_By_ID,
} from "../models/NHAN_VIEN_Model.js";

export const Create = async (req, res) => {
  /*
  Add new nv

  :return: json
  */

  try {
    var nv = req.body;
    var rs = await Add_NV(nv);
    res.status(200).json(rs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export const Update = async (req, res) => {
  /*
  Update nv

  :return: json
  */

  try {
    var nv = req.body;
    var rs = await Update_NV(nv);
    res.status(200).json(rs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export const Get_All = async (req, res) => {
  /*  
  Get all nv

  :return: array
  */

  try {
    var rs = await Find_All();
    res.status(200).json(rs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export const Get_By_ID = async (req, res) => {
  /*
  Find nv by id

  :return: json
  */

  try {
    var _id = req.body._id;
    var rs = await Find_NV_By_ID(_id);
    res.status(200).json(rs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
