import express from "express";
import {
  Get_Nha_CCs,
  Get_Nha_CC_By_ID,
  Create_Nha_CC,
  Update_Nha_CC,
} from "../controller/nha_cc.js";

const router = express.Router();

// GET: /nha_cc
router.get("/", Get_Nha_CCs);

// POST: /nha_cc
router.post("/", Get_Nha_CC_By_ID);

// POST: /nha_cc/create_nha_cc
router.post("/create_nha_cc", Create_Nha_CC);

// POST: /nha_cc/update
router.post("/update", Update_Nha_CC);

export default router;
