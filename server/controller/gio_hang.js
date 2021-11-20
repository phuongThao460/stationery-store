import { GIO_HANG_Model } from "../models/GIO_HANG_Model.js"

export const Get_Gio_Hangs = async (req, res) => {
	try {
		const gio_hangs = await GIO_HANG_Model.find()
		console.log('gio_hangs', gio_hangs)
		res.status(200).json(gio_hangs)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_Gio_Hangs_By_ID = async (req, res) => {
	try {
		const gio_hang_id = req.body.gio_hang_id
		const gio_hang = await GIO_HANG_Model.findById(gio_hang_id)
		console.log('gio_hang', gio_hang)
		res.status(200).json(gio_hang)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Create_Gio_Hang = async (req, res) => {
	try {
		const new_gio_hang = req.body

		const gio_hang = new GIO_HANG_Model(new_gio_hang)
		await gio_hang.save()

		res.status(200).json(gio_hang)
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}