import express from "express";
import {
  Get_Loai_SPs,
  Get_Loai_SP_By_ID,
  Create_Loai_SP,
  Update_Loai_SP,
} from "../controller/loai_sp.js";

const router = express.Router();

// GET: /loai_sp
router.get("/", Get_Loai_SPs);

// POST: /loai_sp
router.post("/", Get_Loai_SP_By_ID);

// POST: /loai_sp/create_loai_sp
router.post("/create_loai_sp", Create_Loai_SP);

// POST: /loai_sp/update
router.post("/update", Update_Loai_SP);

export default router;
