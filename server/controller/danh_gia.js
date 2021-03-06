import {
  Find_All_Danh_Gia_In_DB,
  Find_Danh_Gia_By_ID,
  Create,
  Update,
  Get_List_FeedBack_From_TTKH,
  Get_List_FeedBack_From_SanPham,
} from "../models/DANH_GIA_Model.js";
import { Remove_SanPham_From_List_Feedback } from "../models/TKKH_Model.js";

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
		id_tkkh, id_san_pham, noi_dung_danh_gia,
    so_sao_danh_gia, tinh_trang

  :return: json
	*/

  try {
    var danh_gia = req.body;
    const new_danh_gia = await Create(danh_gia);

    // After feedback, remove san_pham from feedback_list of tkkh
    var id_sp = new_danh_gia.id_san_pham;
    var id_tkkh = new_danh_gia.id_tkkh;
    Remove_SanPham_From_List_Feedback(id_tkkh, id_sp);

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

export const Get_List_FeedBack_By_ID_TTKH = async (req, res) => {
  /*
  Required request value: id_ttkh

  :return: array, null unless id_ttkh is invalid
  */

  try {
    const id_ttkh = req.body.id_ttkh;
    const rs = await Get_List_FeedBack_From_TTKH(id_ttkh);
    res.json(rs);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

export const Get_List_FeedBack_By_ID_SanPham = async (req, res) => {
  /*
  Required request value: id_san_pham

  :return: array, null unless id_ttkh is invalid
  */

  try {
    const id_san_pham = req.body.id_san_pham;
    const rs = await Get_List_FeedBack_From_SanPham(id_san_pham);
    res.json(rs);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
