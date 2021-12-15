import { Remove_Voucher_From_TTKH } from "../models/TKKH_Model.js";
import { Increase_Num_Of_Voucher_Applied } from "../models/VOUCHER_Model.js";
import {
  DON_HANG_Model,
  Set_Dia_Chi_Giao_Hang,
  Compute_Distance_Between_Two_Location,
  Set_Shipping_Fee,
} from "../models/DON_HANG_Model.js";

export const Get_Don_Hangs = async (req, res) => {
  /*
	Fetch all don hang
	:return: array 
	*/

  try {
    const don_hangs = await DON_HANG_Model.find()
      .populate("id_ttkh")
      .populate("id_ttdh");
    //console.log("don_hangs", don_hangs);
    res.status(200).json(don_hangs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_Don_Hang_By_Id = async (req, res) => {
  /*
	Fetch don hang by id khach hang
	:return: json, null if not found
	*/

  try {
    const don_hang_id = req.body._id;
    const don_hang = await DON_HANG_Model.findById(don_hang_id)
      .populate("id_ttkh")
      .populate({
        path: "id_ttdh",
        select: "trang_thai",
      });
    //console.log("don_hang", don_hang);
    if (don_hang == null) {
      console.log("Not found don hang");
    }
    res.status(200).json(don_hang);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Create_Don_Hang = async (req, res) => {
  /*
	Create don hang, dont save to db
	:return: json
	*/

  try {
    var new_don_hang = req.body;

    // Set dia_chi_giao
    new_don_hang = await Set_Dia_Chi_Giao_Hang(
      new_don_hang,
      new_don_hang.dia_chi,
      new_don_hang.id_phuong
    );

    // Set phi_ship
    const distance = await Compute_Distance_Between_Two_Location(
      new_don_hang.dia_chi_giao
    );
    new_don_hang = Set_Shipping_Fee(new_don_hang, distance);

    // If the account uses voucher to get discount, then
    // removing the voucher from list voucher of account
    // and increasing num of applied in voucher
    const id_ttkh = new_don_hang.id_ttkh;
    const id_voucher = new_don_hang.id_voucher;
    if (id_voucher != null) {
      // Removing voucher from list voucher
      await Remove_Voucher_From_TTKH(id_ttkh, id_voucher);

      // Increasing num of applied
      await Increase_Num_Of_Voucher_Applied(id_voucher);
    }

    //const don_hang = new DON_HANG_Model(new_don_hang);
    //await don_hang.save();

    res.status(200).json(new_don_hang);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

export const Get_Don_Hang_By_User_Id = async (req, res) => {
  /*
	Fetch don hang by user id
	:return: array
	*/

  try {
    const id_ttkh = req.body.id_ttkh;
    const don_hangs = await DON_HANG_Model.find({ id_ttkh: id_ttkh }).exec();
    console.log("don_hangs", don_hangs);
    if (don_hangs.length == 0) {
      console.log("Not found don hang");
    }
    res.status(200).json(don_hangs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Update_Don_Hang = async (req, res) => {
  /*
	Update don hang
	:return: json
	*/

  try {
    const update_don_hang = req.body;
    const don_hang = await DON_HANG_Model.findOneAndUpdate(
      { _id: update_don_hang._id },
      update_don_hang,
      { new: true }
    );
    console.log(don_hang);
    res.status(200).json(don_hang);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

export const Save_Don_Hang_To_DB = async (new_don_hang) => {
  /*
  Save don_hang to db

  :return: json
  */

  try {
    const don_hang = new DON_HANG_Model(new_don_hang);
    await don_hang.save();
    res.status(200).json(don_hang);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
