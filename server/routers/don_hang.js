import express from "express";
import {
  Get_Don_Hangs,
  Create_Don_Hang,
  Get_Don_Hang_By_Id,
  Get_Don_Hang_By_User_Id,
  Update_Don_Hang,
  Save_Don_Hang_To_DB,
} from "../controller/don_hang.js";

const router = express.Router();

// GET: /don_hang/
router.get("/", Get_Don_Hangs);

// POST: /don_hang/
router.post("/", Get_Don_Hang_By_Id);

// POST: /don_hang/create_don_hang
router.post("/create_don_hang", Create_Don_Hang);

// POST: /don_hang/by_id_ttkh/
router.post("/by_id_ttkh", Get_Don_Hang_By_User_Id);

// POST: /don_hang/update_by_id/
router.post("/update_by_id", Update_Don_Hang);

// POST: /don_hang/save/
router.post("/save", Save_Don_Hang_To_DB);

export default router;
