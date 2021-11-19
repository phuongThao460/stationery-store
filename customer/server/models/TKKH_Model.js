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
		required: true
	}
}, { timestamps: false })

export const TK_KH_Model = mongoose.model('TAI_KHOAN_KHACH_HANG', schema)