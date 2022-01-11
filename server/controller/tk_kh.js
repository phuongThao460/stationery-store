import {
  TK_KH_Model,
  Find_TKKH_By_TTKH,
  Add_SanPham_To_WishList,
  Remove_SanPham_From_WishList,
  Get_FeedBack_Product_By_TTKH,
  Get_WishList_By_TTKH,
  Get_FeedBack_Count,
  Get_Voucher_Count,
} from "../models/TKKH_Model.js";

export const Get_TKKHs = async (req, res) => {
  /*
	Fetch all tkkh
	:return: array
	*/

  try {
    const tkkhs = await TK_KH_Model.find().populate({
      path: "id_ttkh",
      populate: {
        path: "id_phuong",
        select: "phuong_xa",
        populate: {
          path: "id_quan",
          select: "quan_huyen",
          populate: {
            path: "id_thanh_pho",
            select: "ten_thanh_pho",
          },
        },
      },
    });
    console.log("tkkhs", tkkhs);
    res.status(200).json(tkkhs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Get_TKKH_By_ID = async (req, res) => {
  /*
	Fetch tkkh by id
	:return: json 
	*/

  try {
    const tkkh_id = req.body._id;
    const tkkh = await TK_KH_Model.findById(tkkh_id).populate({
      path: "id_ttkh",
      populate: {
        path: "id_phuong",
        select: "phuong_xa",
        populate: {
          path: "id_quan",
          select: "quan_huyen",
          populate: {
            path: "id_thanh_pho",
            select: "ten_thanh_pho",
          },
        },
      },
    });
    console.log("tkkh", tkkh);
    res.status(200).json(tkkh);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const Login = async (req, res) => {
  /*
	Login
	*/

  try {
    const login_info = req.body;
    const tkkh = await TK_KH_Model.findOne(login_info)
      .populate({
        path: "id_ttkh",
        populate: {
          path: "id_phuong",
          select: "phuong_xa",
          populate: {
            path: "id_quan",
            select: "quan_huyen",
            populate: {
              path: "id_thanh_pho",
              select: "ten_thanh_pho",
            },
          },
        },
      })
      .exec();
    console.log("tkkh", tkkh);
    res.json(tkkh);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const create_TKKH = async (req, res) => {
  /*
	Create new tai khoan khach hang
	:return: tai khoan khach hang was created
	*/

  try {
    const new_tkkh = req.body;

    const tkkh = new TK_KH_Model(new_tkkh);
    await tkkh.save();

    res.status(200).json(tkkh);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

export const Update_TKKH = async (req, res) => {
  /*
  Update tkkh
  :return: json
  */

  try {
    const update_tkkh = req.body;

    const tkkh = await TK_KH_Model.findOneAndUpdate(
      { _id: update_tkkh._id },
      update_tkkh,
      { new: true }
    );
    console.log(tkkh);
    res.status(200).json(tkkh);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const Get_TKKH_By_TTKH = async (req, res) => {
  try {
    var id_ttkh = req.body.id_ttkh;
    var rs = await Find_TKKH_By_TTKH(id_ttkh);
    res.json(rs);
  } catch (err) {
    res.json(err);
  }
};

export const Add_To_WishList = async (req, res) => {
  /*
  Request body: id_tkkh, id_sp
  */

  try {
    console.log(req.body);
    var id_tkkh = req.body.id_tkkh;
    var id_sp = req.body.id_sp;
    var rs = await Add_SanPham_To_WishList(id_tkkh, id_sp);
    res.status(200).json(rs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export const Remove_From_WishList = async (req, res) => {
  /*
  Request body: id_tkkh, id_sp
  */

  try {
    var id_tkkh = req.body.id_tkkh;
    var id_sp = req.body.id_sp;
    var rs = await Remove_SanPham_From_WishList(id_tkkh, id_sp);
    res.status(200).json(rs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export const Get_FeedBack_By_ID_TTKH = async (req, res) => {
  /*
  Request body: id_ttkh
  */

  try {
    var id_ttkh = req.body.id_ttkh;
    var rs = await Get_FeedBack_Product_By_TTKH(id_ttkh);

    //if (rs.length > 0) {
    //// Get 1st ele from result
    //rs = rs[0];
    //}
    res.status(200).json(rs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const Get_WishList_By_ID_TTKH = async (req, res) => {
  /*
  Request body: id_ttkh
  */

  try {
    var id_ttkh = req.body.id_ttkh;
    var rs = await Get_WishList_By_TTKH(id_ttkh);

    res.status(200).json(rs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const Get_FeedBack_Count_By_ID_TKKH = async (req, res) => {
  /*
  required value: id_tkkh
  */

  try {
    var id_tkkh = req.body.id_tkkh;
    var count = await Get_FeedBack_Count(id_tkkh);
    res.json(count);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

export const Get_Voucher_Count_By_ID_TKKH = async (req, res) => {
  /*
  required value: id_tkkh
  */

  try {
    var id_tkkh = req.body.id_tkkh;
    var count = await Get_Voucher_Count(id_tkkh);
    res.json(count);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
