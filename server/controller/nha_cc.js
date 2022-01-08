import { NHA_CC_Model, Update } from "../models/NHA_CC_Model.js";

export const Get_Nha_CCs = async (req, res) => {
  try {
    const nha_ccs = await NHA_CC_Model.find();
    console.log("nha_ccs", nha_ccs);
    res.status(200).json(nha_ccs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_Nha_CC_By_ID = async (req, res) => {
  try {
    const nha_cc_id = req.body.nha_cc_id;
    const nha_cc = await NHA_CC_Model.findById(nha_cc_id);
    console.log("nha_cc", nha_cc);
    res.status(200).json(nha_cc);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Create_Nha_CC = async (req, res) => {
  try {
    const new_nha_cc = req.body;

    const nha_cc = new NHA_CC_Model(new_nha_cc);
    await nha_cc.save();

    res.status(200).json(nha_cc);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

export const Update_Nha_CC = async (req, res) => {
  try {
    const nha_cc = req.body;
    const rs = await Update(nha_cc);
    res.json(rs);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
