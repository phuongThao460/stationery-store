import express from "express";
import {
  Get_TKKHs,
  Get_TKKH_By_ID,
  Login,
  create_TKKH,
  Update_TKKH,
  Get_TKKH_By_TTKH,
} from "../controller/tk_kh.js";

const router = express.Router();

// GET: /tkkh/
router.get("/", Get_TKKHs);

// POST: /tkkh/
router.post("/", Get_TKKH_By_ID);

// POST: /tkkh/login
router.post("/login", Login);

// POST: /tkkh/create
router.post("/create", create_TKKH);

// POST: /tkkh/update
router.post("/update", Update_TKKH);

router.post("/test", Get_TKKH_By_TTKH);

export default router;
