import express from "express";
import { Create, Update, Get_By_ID, Get_All } from "../controller/nhan_vien.js";

const router = express.Router();

// GET: /tknv/
router.get("/", Get_All);

// POST: /tknv/
router.post("/", Get_By_ID);

// POST: /tknv/create
router.post("/create", Create);

// POST: /tknv/update
router.post("/update", Update);

export default router;
