import { PHUONG_Model } from "../models/PHUONG_Model.js"
import { TT_KH_Model } from "../models/TTKH_Model.js"
import { QUAN_Model } from "../models/QUAN_Model.js"
import { THANH_PHO_Model} from "../models/THANH_PHO_Model.js"
export const Get_TTKHs = async (req, res) => {
	/*
	Fetch all thong tin khach hang in db
	:return: array
	*/

	try {
		const ttkhs = await TT_KH_Model.find()
		console.log('ttkhs', ttkhs)
		res.status(200).json(ttkhs)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}
export const Get_address = async (req, res) => {
	try {
		const ttkd_id = req.body.ttkd_id;
		const infoCus = await TT_KH_Model.findOne(ttkd_id);
		const phuong = await PHUONG_Model.findOne(infoCus.id_phuong);
		const quan = await QUAN_Model.findOne(phuong.id_quan);
		const tp = await THANH_PHO_Model.findOne(quan.id_thanh_pho);
		const address = phuong.phuong_xa + ", " + quan.quan_huyen + ", " + tp.ten_thanh_pho
		console.log('address', address);
		res.status(200).json(address)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}
export const Get_TTKH_By_ID = async (req, res) => {
	/*
	Fetch thong tin khach hang by _id
	:return: json, null if not found anything
	*/

	try {
		const ttkh_id = req.body.ttkh_id
		const ttkh = await TT_KH_Model.findById(ttkh_id)
		.populate({
			path: 'id_phuong',
			select: 'phuong_xa',
			populate: {
				path: "id_quan",
				select: "quan_huyen",
				populate: {
					path: "id_thanh_pho",
					select: "ten_thanh_pho"
				}
			}
		})
		console.log('ttkh', ttkh)
		res.status(200).json(ttkh)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const create_TTKH = async (req, res) => {
	/*
	Create new thong tin khach hang
	:return: thong tin khach hang was created
	*/

	try {
		const new_ttkh = req.body

		const ttkh = new TT_KH_Model(new_ttkh)
		await ttkh.save()

		res.status(200).json(ttkh)
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}