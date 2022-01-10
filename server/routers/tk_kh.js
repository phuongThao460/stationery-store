import express from "express";
import {
  Get_TKKHs,
  Get_TKKH_By_ID,
  Login,
  create_TKKH,
  Update_TKKH,
  Get_TKKH_By_TTKH,
  Add_To_WishList,
  Remove_From_WishList,
  Get_FeedBack_By_ID_TTKH,
  Get_WishList_By_ID_TTKH,
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

// POST: /tkkh/add_wishlist
router.post("/add_wishlist", Add_To_WishList);

// POST: /tkkh/remove_wishlist
router.post("/remove_wishlist", Remove_From_WishList);

// POST: /tkkh/feedbacks_from_ttkh
router.post("/feedbacks_from_ttkh", Get_FeedBack_By_ID_TTKH);

// POST:
router.post("/wishlist_from_ttkh", Get_WishList_By_ID_TTKH);

router.post("/test", Get_TKKH_By_TTKH);

export default router;
