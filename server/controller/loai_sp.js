import { LOAI_SP_Model } from "../models/LOAI_SP_Model.js"

export const Get_Loai_SPs = async (req, res) => {
	try {
		const loai_sps = await LOAI_SP_Model.find()
		console.log('loai_sps', loai_sps)
		res.status(200).json(loai_sps)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_Loai_SP_By_ID = async (req, res) => {
	try {
		const loai_sp_id = req.body.loai_sp_id
		const loai_sp = await LOAI_SP_Model.findById(loai_sp_id)
		console.log('loai_sp', loai_sp)
		res.status(200).json(loai_sp)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Create_Loai_SP = async (req, res) => {
	try {
		const new_loai_sp = req.body

		const loai_sp = new LOAI_SP_Model(new_loai_sp)
		await loai_sp.save()

		res.status(200).json(loai_sp)
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}