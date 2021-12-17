import express from "express";
import {
  Get_TTKHs,
  Get_TTKH_By_ID,
  create_TTKH,
  Get_address,
  Update_TTKH,
} from "../controller/tt_kh.js";

const router = express.Router();

// GET: /ttkh/
router.get("/", Get_TTKHs);

// POST: /ttkh/
router.post("/", Get_TTKH_By_ID);

// POST: /ttkh/getAddress
router.post("/getAddress", Get_address);

// POST: /ttkh/create
router.post("/create", create_TTKH);

// POST: /ttkh/update
router.post("/update", Update_TTKH);

export default router;
