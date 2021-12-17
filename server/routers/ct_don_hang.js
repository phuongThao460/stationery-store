import express from "express";
import {
  Get_CT_DHs,
  Create_CT_DH,
  Get_CT_DH_By_Id,
  Get_Don_Hang_By_DH_Id,
  Update_CTDH,
  Get_CTDH_By_TTKH,
} from "../controller/ct_don_hang.js";

const router = express.Router();

// GET: /ct_dh/
router.get("/", Get_CT_DHs);

// POST: /ct_dh/
router.post("/", Get_CT_DH_By_Id);

// POST: /ct_dh/create
router.post("/create", Create_CT_DH);

// POST: /ct_dh/by_dh_id
router.post("/by_dh_id", Get_Don_Hang_By_DH_Id);

// POST: /ct_dh/update
router.post("/update", Update_CTDH);

// POST: /ct_dh/by_ttkh
router.post("/by_ttkh", Get_CTDH_By_TTKH);

export default router;
