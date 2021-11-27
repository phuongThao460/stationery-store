import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	quan_huyen: {
		type: String,
		required: true
	},
	id_thanh_pho: {
		type: mongoose.Types.ObjectId,
		ref: "THANH_PHO"
	}
}, { timestamps: false })

export const QUAN_Model = mongoose.model('QUAN', schema)