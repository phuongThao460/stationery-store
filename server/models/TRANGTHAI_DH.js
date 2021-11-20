import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_trang_thai: {
		type: String,
		required: true
	}
}, { timestamps: false })

export const TRANG_THAI_DH_Model = mongoose.model('TRANG_THAI_DH', schema)