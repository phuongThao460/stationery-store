import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	id_thong_ke: {
		type: mongoose.Types.ObjectId,
		require: true,
		ref: "THONG_KE"
	},
	id_san_pham: {
		type: mongoose.Types.ObjectId,
		require: true,
		ref: "SAN_PHAM"
	},
	gia_nhap: {
		type: Number,
		require: true,
		default: 0
	},
	gia_ban: {
		type: Number, 
		require: true,
		default: 0
	},
	tong_so_luong_da_ban: {
		type: Number, 
		require: true,
		default: 1
	},
	tong_tien: {
		type: Number, 
		require: true,
		default: 0
	},
	mau_sac: {
		type: String
	}
}, { timestamps: false })

export const CT_THONG_KE_Model = mongoose.model('CT_THONG_KE', schema)