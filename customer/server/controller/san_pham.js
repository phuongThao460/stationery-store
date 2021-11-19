import { SANPHAM_Model } from "../models/SANPHAM_Model.js"

export const Get_San_Phams = async (req, res) => {
	try {
		const san_phams = await SANPHAM_Model.find()
		console.log('san_phams', san_phams)
		res.status(200).json(san_phams)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_San_Pham_By_ID = async (req, res) => {
	try {
		const san_pham_id = req.body.san_pham_id
		const san_pham = await SANPHAM_Model.findById(san_pham_id)
		console.log('san_pham', san_pham)
		res.status(200).json(san_pham)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Find_San_Pham_By_Id = async id_san_pham => {
	try {
		const san_pham = await SANPHAM_Model.findById(id_san_pham)
		return san_pham
	} catch(err) {
		console.log(err)
		return err
	}
}

export const Create_San_Pham = async (req, res) => {
	try {
		const new_san_pham = req.body

		const san_pham = new SANPHAM_Model(new_san_pham)
		await san_pham.save()

		res.status(200).json(san_pham)
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}