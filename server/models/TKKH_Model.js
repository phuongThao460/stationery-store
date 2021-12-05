import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	ten_dn: {
		type: String,
		required: true
	},
	mat_khau: {
		type: String,
		required: true
	},
	id_ttkh: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "THONG_TIN_KHACH_HANG"
	},
	id_voucher: [{
		type: mongoose.Types.ObjectId,
		default: [],
		ref: "VOUCHER"
	}],
	wish_list: [{
		type: mongoose.Types.ObjectId,
		default: [],
		ref: "SAN_PHAM"
	}],
	ngay_tao_tk: {
		type: Date,
		default: new Date()
	}
}, { timestamps: false })

export const TK_KH_Model = mongoose.model('TAI_KHOAN_KHACH_HANG', schema)