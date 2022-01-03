import {
  Find_All_Danh_Gia_In_DB,
  Find_Danh_Gia_By_ID,
  Create,
  Update,
} from "../models/DANH_GIA_Model.js";

// ==========================================
//              FUNCTION DEFINITIONS
// ==========================================

export const Get_DanhGias = async (req, res) => {
  /*
	Fetch all danh_gia in db
	:return: Array
	*/

  try {
    const danh_gias = await Find_All_Danh_Gia_In_DB();
    res.status(200).json(danh_gias);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_Danh_Gia_By_ID = async (req, res) => {
  /*
	Fetch danh_gia by _id

	:return: json, null if not found anything
	*/

  try {
    const id_danh_gia = req.body._id;
    const danh_gia = await Find_Danh_Gia_By_ID(id_danh_gia);

    res.status(200).json(danh_gia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Create_DanhGia = async (req, res) => {
  /*
	Add new danh_gia then save to db
	
	required value to create new danh gia: 
		id_ttkh, id_san_pham, noi_dung_danh_gia,
    so_sao_danh_gia, tinh_trang

  :return: json
	*/

  try {
    var danh_gia = req.body;
    const new_danh_gia = await Create(danh_gia);

    //console.log("voucher: ", voucher);
    res.status(200).json(new_danh_gia);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Update_DanhGia = async (req, res) => {
  /*
  Update danh gia

  :return: json
  */

  try {
    var new_danh_gia = req.body;
    const rs = await Update(new_danh_gia);

    res.status(200).json(rs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
