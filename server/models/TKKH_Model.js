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
	sp_cho_danh_gia: [{ 
		type: mongoose.Types.ObjectId,
		ref: "SAN_PHAM"
	}]
}, { timestamps: false })

export const TK_KH_Model = mongoose.model('TAI_KHOAN_KHACH_HANG', schema)