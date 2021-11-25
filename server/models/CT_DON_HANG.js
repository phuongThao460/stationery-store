import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	id_san_pham: {
		type: String,
		required: true
	},
	id_don_hang: {
		type: String,
		required: true
	},
	gia_ban: {
		type: Number,
		required: true
	},
	so_luong: {
		type: Number,
		required: true
	},
	tong_gia: {
		type: Number,
		required: true
	}
}, { timestamps: false })

export const CT_DON_HANG_Model = mongoose.model('CT_DON_HANG', schema)