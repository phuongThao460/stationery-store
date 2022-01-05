import express from "express";
import {
  Create,
  Update,
  Get_By_ID,
  Get_All,
  Login,
} from "../controller/nhan_vien.js";

const router = express.Router();

// GET: /nhan_vien/
router.get("/", Get_All);

// POST: /nhan_vien/
router.post("/", Get_By_ID);

// POST: /nhan_vien/create
router.post("/create", Create);

// POST: /nhan_vien/update
router.post("/update", Update);

// POST: /nhan_vien/login
router.post("/login", Login);

export default router;
