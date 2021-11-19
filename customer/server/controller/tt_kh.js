import { TT_KH_Model } from "../models/TTKH_Model.js"

export const Get_TTKHs = async (req, res) => {
	try {
		const ttkhs = await TT_KH_Model.find()
		console.log('ttkhs', ttkhs)
		res.status(200).json(ttkhs)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_TTKH_By_ID = async (req, res) => {
	try {
		const ttkh_id = req.body.ttkh_id
		const ttkh = await TT_KH_Model.findById(ttkh_id)
		console.log('ttkh', ttkh)
		res.status(200).json(ttkh)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const create_TTKH = async (req, res) => {
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