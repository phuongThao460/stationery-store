import { MAU_SAC_Model } from "../models/MAU_SAC_Model.js"

export const Get_Mau_Sacs = async (req, res) => {
	try {
		const mau_sacs = await MAU_SAC_Model.find()
		console.log('mau_sacs', mau_sacs)
		res.status(200).json(mau_sacs)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_Mau_Sac_By_ID = async (req, res) => {
	try {
		const mau_sac_id = req.body.mau_sac_id
		const mau_sac = await MAU_SAC_Model.findById(mau_sac_id)
		console.log('mau_sac', mau_sac)
		res.status(200).json(mau_sac)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Create_Mau_Sac = async (req, res) => {
	try {
		const new_mau_sac = req.body

		const mau_sac = new MAU_SAC_Model(new_mau_sac)
		await mau_sac.save()

		res.status(200).json(mau_sac)
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}