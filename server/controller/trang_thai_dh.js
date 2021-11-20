import { TRANG_THAI_DH_Model } from "../models/TRANGTHAI_DH.js"

export const Get_Trang_Thais = async (req, res) => {
	try {
		const trang_thais = await TRANG_THAI_DH_Model.find()
		console.log('trang_thais', trang_thais)
		res.status(200).json(trang_thais)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_Trang_Thai_By_ID = async (req, res) => {
	try {
		const trang_thai_id = req.body.trang_thai_id
		const trang_thai = await TRANG_THAI_DH_Model.findById(trang_thai_id)
		console.log('trang_thai', trang_thai)
		res.status(200).json(chat_lieu)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Create_Trang_Thai = async (req, res) => {
	try {
		const new_trang_thai = req.body

		const trang_thai = new TRANG_THAI_DH_Model(new_trang_thai)
		await trang_thai.save()

		res.status(200).json(trang_thai)
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}