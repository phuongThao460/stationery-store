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
		type: mongoose.Types.ObjectId, ref: 'THONG_TIN_KHACH_HANG',
		required: true
	},
	id_ttdh: {
		type: mongoose.Types.ObjectId, ref: 'TRANG_THAI_DH',
		required: true
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
	tong_tien: {
		type: Number,
		default: 0
	}
}, { timestamps: false })

export const DON_HANG_Model = mongoose.model('DON_HANG', schema)