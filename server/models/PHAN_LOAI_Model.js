import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_phan_loai: {
		type: String,
		required: true
	}
}, { timestamps: false })

export const PHAN_LOAI_Model = mongoose.model('PHAN_LOAI', schema)