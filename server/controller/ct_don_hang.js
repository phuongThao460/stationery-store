import { CT_DON_HANG_Model  } from "../models/CT_DON_HANG.js"

export const Get_CT_DHs = async (req, res) => {
	/*
	Fetch all chi tiet don hang
	:return: array 
	*/

	try {
		const ct_dhs = await CT_DON_HANG_Model.find()
			.populate('id_san_pham')
			.populate('id_don_hang')
		console.log('ct_dhs', ct_dhs)
		res.status(200).json(ct_dhs)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Create_CT_DH = async new_ct_dh  => {
	/*
	Create ct don hang, this method will be called when
	creating don hang in controller don_hang
	:return: json
	*/

	try {

		const ct_dh = new CT_DON_HANG_Model(new_ct_dh)
		await ct_dh.save()

		return ct_dh
	} catch(err) {
		return err
		console.log(err)
	}
}



export const Get_CT_DH_By_Id = async (req, res) => {
	/*
	Fetch  ct don hang by _id 
	:return: json, null if not found
	*/

	try {
		const ctdh_id = req.body._id
		const ctdh = await CT_DON_HANG_Model.findById(ctdh_id)
			.populate('id_san_pham')
			.populate('id_don_hang')
		console.log('ctdh', ctdh)
		if (ctdh == null) {
			console.log("Not found ctdh")
		}
		res.status(200).json(ctdh)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Get_Don_Hang_By_DH_Id = async (req, res) => {
	/*
	Fetch ctdh by don hang id
	:return: array
	*/

	try {
		const id_dh = req.body.id_don_hang
		const ctdh_s = await CT_DON_HANG_Model.find({ id_don_hang: id_dh }).exec()
		console.log('ctdh_s', ctdh_s)
		if (ctdh_s.length == 0) {
			console.log("Not found ctdh")
		}
		res.status(200).json(ctdh_s)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Update_CTDH = async (req, res) => {
	/*
	Update ct don hang
	:return: json
	*/

	try {
		const update_ctdh = req.body

		const ctdh = await CT_DON_HANG_Model.findOneAndUpdate(
			{ _id: update_ctdh._id }, update_ctdh, { new: true }
		)
		console.log(ctdh)
		res.status(200).json(ctdh)	

	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}