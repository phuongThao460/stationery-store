import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_tp: {
		type: String,
		required: true
	}
}, { timestamps: false })

export const THANH_PHO_Model = mongoose.model('THANH_PHO', schema)