import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_nha_cc: {
		type: String,
		required: true
	}
}, { timestamps: false })

export const NHA_CC_Model = mongoose.model('NHA_CUNG_CAP', schema)