import { TK_KH_Model } from "../models/TKKH_Model.js"

export const Get_TKKHs = async (req, res) => {
	/*
	Fetch all tkkh
	:return: array
	*/

	try {
		const tkkhs = await TK_KH_Model.find()
		console.log('tkkhs', tkkhs)
		res.status(200).json(tkkhs)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_TKKH_By_ID = async (req, res) => {
	/*
	Fetch tkkh by id
	:return: json 
	*/

	try {
		const tkkh_id = req.body.tkkh_id
		const tkkh = await TK_KH_Model.findById(tkkh_id)
		console.log('tkkh', tkkh)
		res.status(200).json(tkkh)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Login = async (req, res) => {
	/*
	Login
	*/

	try {
		const login_info = req.body
		const tkkh = await TK_KH_Model.findOne(login_info)
		console.log('tkkh', tkkh)
		if(tkkh == null) {
			res.status(200).send('Tài khoản hoặc mật khẩu không đúng')
		} else {
			res.status(200).json('Đăng nhập thành công')
		}     
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Add_San_Pham_To_Rate_List = async (_id, sp_id) => {
	/*
	Add id san pham to danh sach san pham cho danh gia
	*/
	
	try {
    	const tkkh = await TK_KH_Model.findOneAndUpdate(
      		{ _id: _id },
      		{ $push: { sp_cho_danh_gia: sp_id } },
      		{ new: true }
    	);
    	console.log(tkkh);
		return tkkh
  	} catch (err) {
		console.log(err)
		return err
  	}
}