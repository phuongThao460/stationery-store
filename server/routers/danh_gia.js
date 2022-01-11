import express from "express";
import {
  Get_DanhGias,
  Get_Danh_Gia_By_ID,
  Create_DanhGia,
  Update_DanhGia,
  Get_List_FeedBack_By_ID_TTKH,
  Get_List_FeedBack_By_ID_SanPham,
} from "../controller/danh_gia.js";

const router = express.Router();

// GET: /danh_gia/
router.get("/", Get_DanhGias);

// POST: /danh_gia/
router.post("/", Get_Danh_Gia_By_ID);

// POST: /danh_gia/create
router.post("/create", Create_DanhGia);

// POST: /danh_gia/update
router.post("/update", Update_DanhGia);

// POST: /danh_gia/feedbacks_from_ttkh
router.post("/feedbacks_from_ttkh", Get_List_FeedBack_By_ID_TTKH);

// POST: /danh_gia/feedbacks_from_sp
router.post("/feedbacks_from_sp", Get_List_FeedBack_By_ID_SanPham);

export default router;
