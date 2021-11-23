import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_sp: {
		type: String,
		required: true
	},
	so_luong: {
		type: Number,
		required: true
	},
	ngay_nhap: {
		type: Date,
		required:true
	},
	mo_ta: {
		type: String,
	},
	don_gia_nhap: {
		type: Number,
		required: true
	},
	don_gia_xuat: {
		type: Number,
		required: true
	},
	id_loai_sp: {
		type: String,
		required: true
	},
	id_nha_cc: {
		type: String,
		required: true
	},
	id_mau_sac: {
		type: Array,
		required: true
	},
	id_chat_lieu: {
		type: String,
		required: true
	},
	ti_le_danh_gia: {
		type: Number,
		default: 0
	}
}, { timestamps: false })

export const SANPHAM_Model = mongoose.model('SAN_PHAM', schema)