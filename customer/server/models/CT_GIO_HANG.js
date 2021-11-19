import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	id_gio_hang: {
		type: mongoose.Types.ObjectId,
		required: true
	},
	id_san_pham: {
		type: mongoose.Types.ObjectId,
		required: true
	},
	so_luong: {
		type: Number,
		required: true,
		default: 0
	}
}, { timestamps: false })

export const CT_GIO_HANG_Model = mongoose.model('CT_GIO_HANG', schema)