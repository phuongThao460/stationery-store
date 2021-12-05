import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ngay_bat_dau: {
		type: Date,
		require: true,
		default: new Date()
	},
	ngay_ket_thuc: {
		type: Date,
		require: true
	},
	tong_tien_san_pham_ban_duoc: {
		type: Number,
		require: true,
		default: 0
	},
	tong_tien_giam_boi_voucher: {
		type: Number,
	},
	tong_doanh_thu: {
		type: Number,
		require: true,
		default: 0
	}
}, { timestamps: false })

export const THONG_KE_Model = mongoose.model('THONG_KE', schema)