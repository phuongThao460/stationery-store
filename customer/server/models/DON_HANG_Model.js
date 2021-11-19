import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ngay_dat: {
		type: Date,
		required: true
	},
	ngay_giao: {
		type: Date,
		required: true
	},
	id_ttkh: {
		type: mongoose.Types.ObjectId,
		required: true
	},
	id_ttdh: {
		type: mongoose.Types.ObjectId,
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

export const SANPHAM_Model = mongoose.model('SAN_PHAM', schema)