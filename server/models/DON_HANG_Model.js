import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ngay_dat: {
		type: Date,
		required: true,
		default: new Date()
	},
	ngay_giao: {
		type: Date,
		required: true,
		default: new Date()
	},
	id_ttkh: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "THONG_TIN_KHACH_HANG"
	},
	id_ttdh: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "TRANG_THAI_DH"
	},
	ghi_chu: {
		type: String
	},
	tong_phu: {
		type: Number,
		default: 0
	},
	phi_ship: {
		type: Number,
		default: 0
	},
	tong_gia_giam_boi_voucher: {
		type: Number,
		default: 0
	},
	id_voucher: {
		type: mongoose.Types.ObjectId,
		ref: "VOUCHER"
	},
	id_phuong_thuc_thanh_toan: {
		type: mongoose.Types.ObjectId,
		ref: "PHUONG_THUC_THANH_TOAN"
	},
	tong_tien: {
		type: Number,
		default: 0
	}
}, { timestamps: false })

export const DON_HANG_Model = mongoose.model('DON_HANG', schema)
