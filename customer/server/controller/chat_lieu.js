import { CHAT_LIEU_Model } from "../models/CHAT_LIEU_Model.js"

export const Get_Chat_Lieus = async (req, res) => {
	try {
		const chat_lieus = await CHAT_LIEU_Model.find()
		console.log('chat_lieus', chat_lieus)
		res.status(200).json(chat_lieus)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_Chat_Lieu_By_ID = async (req, res) => {
	try {
		const chat_lieu_id = req.body.chat_lieu_id
		const chat_lieu = await CHAT_LIEU_Model.findById(chat_lieu_id)
		console.log('chat_lieu', chat_lieu)
		res.status(200).json(chat_lieu)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Create_Chat_Lieu = async (req, res) => {
	try {
		const new_chat_lieu = req.body

		const chat_lieu = new CHAT_LIEU_Model(new_chat_lieu)
		await chat_lieu.save()

		res.status(200).json(chat_lieu)
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}