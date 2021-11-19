import { TK_KH_Model } from "../models/TKKH_Model.js"

export const Get_TKKHs = async (req, res) => {
	try {
		const tkkhs = await TK_KH_Model.find()
		console.log('tkkhs', tkkhs)
		res.status(200).json(tkkhs)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_TKKH_By_ID = async (req, res) => {
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

