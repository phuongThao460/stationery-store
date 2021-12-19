import { TK_KH_Model, Find_TKKH_By_TTKH } from "../models/TKKH_Model.js";

export const Get_TKKHs = async (req, res) => {
  /*
	Fetch all tkkh
	:return: array
	*/

  try {
    const tkkhs = await TK_KH_Model.find().populate("id_ttkh");
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
    if (tkkh === null) {
      res.status(200).send("Tài khoản hoặc mật khẩu không đúng");
    } else {
      res.status(200).json(tkkh);
    }
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
