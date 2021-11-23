import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_kh: {
		type: String,
		required: true
	},
	sdt: {
		type: String,
		required: true
	},
	dia_chi: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
	diem_tich_luy: {
		type: String,
		default: 0
	}, 
	gioi_tinh: {
		type: Boolean,
		required: true
	}
}, { timestamps: false })

export const TT_KH_Model = mongoose.model('THONG_TIN_KHACH_HANG', schema)