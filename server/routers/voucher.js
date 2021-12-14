import express from "express";
import {
  Get_Vouchers,
  Get_Voucher_By_ID,
  Create_Voucher,
  Test_Find_TKKH_Meets_The_Conditions,
  Get_Voucher_By_TTKH,
} from "../controller/voucher.js";

const router = express.Router();

// GET: /voucher/
router.get("/", Get_Vouchers);

// POST: /voucher/
router.post("/", Get_Voucher_By_ID);

// POST: /voucher/create
router.post("/create", Create_Voucher);

// POST: /voucher/test
router.post("/test", Test_Find_TKKH_Meets_The_Conditions);

// POST: /voucher/ttkh
router.post("/ttkh", Get_Voucher_By_TTKH);

export default router;
