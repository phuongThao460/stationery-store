import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_mau: {
		type: String,
		required: true
	}
}, { timestamps: false })

export const MAU_SAC_Model = mongoose.model('MAU_SAC', schema)