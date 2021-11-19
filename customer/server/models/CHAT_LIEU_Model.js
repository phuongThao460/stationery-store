import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_chat_lieu: {
		type: String,
		required: true
	}
}, { timestamps: false })

export const CHAT_LIEU_Model = mongoose.model('CHAT_LIEU', schema)