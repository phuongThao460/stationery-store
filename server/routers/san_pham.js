import express from "express";
import {
  Get_San_Phams,
  Get_San_Pham_By_ID,
  Create_San_Pham,
  Update_San_Pham,
  Pagination,
  Limit_Page,
} from "../controller/san_pham.js";
import { SANPHAM_Model } from "../models/SANPHAM_Model.js";

const router = express.Router();

// GET: /san_pham
router.get("/", Get_San_Phams);

// POST: /san_pham
router.post("/", Get_San_Pham_By_ID);

// POST: /san_pham/create_san_pham
router.post("/create_san_pham", Create_San_Pham);

// POST: /san_pham/update_san_pham
router.post("/update_san_pham", Update_San_Pham);

// GET: /san_pham/:id_loai_sp/:page
router.get("/:id_loai_sp/:page", Pagination);

// POST: /san_pham/limit_page
router.post("/limit_page", Limit_Page);

export default router;
