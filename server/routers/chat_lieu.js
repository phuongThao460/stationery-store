import express from "express";
import {
  Get_Chat_Lieus,
  Get_Chat_Lieu_By_ID,
  Create_Chat_Lieu,
  Update_Chat_Lieu,
} from "../controller/chat_lieu.js";

const router = express.Router();

// GET: /chat_lieu
router.get("/", Get_Chat_Lieus);

// POST: /chat_lieu
router.post("/", Get_Chat_Lieu_By_ID);

// POST: /chat_lieu/create_chat_lieu
router.post("/create_chat_lieu", Create_Chat_Lieu);

// POST: /chat_lieu/update
router.post("/update", Update_Chat_Lieu);

export default router;
