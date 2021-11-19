import { CT_GIO_HANG_Model } from "../models/CT_GIO_HANG.js"
import { Find_San_Pham_By_Id } from "./san_pham.js"

export const Get_CT_Gio_Hangs = async (req, res) => {
	try {
		const ct_gio_hangs = await CT_GIO_HANG_Model.find()
		console.log('ct_gio_hangs', ct_gio_hangs)
		res.status(200).json(ct_gio_hangs)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}

export const Get_CT_Gio_Hang_By_ID = async (req, res) => {
	try {
		const ct_gh_id = req.body.ct_gh_id
		const ct_gh = await CT_GIO_HANG_Model.findById(ct_gh_id)
		console.log('ct_gh', ct_gh)
		res.status(200).json(ct_gh)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Create_CT_GioHang = async (req, res) => {
	try {
		const new_ct_gio_hang = req.body

		const ct_gio_hang = new CT_GIO_HANG_Model(new_ct_gio_hang)
		await ct_gio_hang.save()

		res.status(200).json(ct_gio_hang)
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}

export const Update_CT_GioHang = async (req, res) => {
	try {
		const update_ct_gh = req.body

		const san_pham = await Find_San_Pham_By_Id(update_ct_gh.id_san_pham)

		if(update_ct_gh.so_luong < 1) {
			console.log('Số lượng sản phẩm trong giỏ hàng phải nhiều hơn 1')
			res.status(500).json('Số lượng sản phẩm trong giỏ hàng phải nhiều hơn 1')
			return
		}
		else if(san_pham.so_luong < update_ct_gh.so_luong) {
			console.log('Số lượng sản phẩm trong giỏ hàng vượt quá số lượng trong kho')
			res.status(500).json('Số lượng sản phẩm trong giỏ hàng vượt quá số lượng trong kho')
			return
		}
		else {
			const ct_gh = await CT_GIO_HANG_Model.findOneAndUpdate(
				{ _id: update_ct_gh._id }, update_ct_gh, { new: true }
			)
			console.log(ct_gh)
			res.status(500).json(ct_gh)	
			return
		}
	} catch(err) {
		res.status(500).json({ error: err })
		console.log(err)
	}
}