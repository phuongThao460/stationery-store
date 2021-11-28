import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	phuong_xa: {
		type: String,
		required: true
	},
	id_quan: {
		type: mongoose.Types.ObjectId,
		ref: "QUAN"
	}
}, { timestamps: false })

export const PHUONG_Model = mongoose.model('PHUONG', schema)