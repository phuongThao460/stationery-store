import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_loai_sp: {
		type: String,
		required: true
	}
}, { timestamps: false })

export const LOAI_SP_Model = mongoose.model('LOAI_SAN_PHAM', schema)