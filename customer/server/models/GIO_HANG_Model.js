import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	id_tkkh: {
		type: mongoose.Types.ObjectId,
		required: true
	}
}, { timestamps: false })

export const GIO_HANG_Model = mongoose.model('GIO_HANG', schema)