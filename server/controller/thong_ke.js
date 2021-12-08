import { CT_THONG_KE_Model } from '../models/CT_THONG_KE_Model.js'
import { THONG_KE_Model, Add_Thong_Ke, Find_Hoa_Don_By_Date,
		Compute_Tong_Tien_By_Don_Hangs, Find_San_Pham_By_ID_Don_Hangs,
		Compute_Tong_Tien_By_CT_Thong_Kes, Add_CT_Thong_Ke } 
		from '../models/THONG_KE_Model.js'


// ==========================================
//              FUNCTION DEFINITIONS
// ==========================================

export const Get_ThongKes = async (req, res) => {
	/*
	Fetch all thong_kes in db
	:return: Array
	*/

	try {
		const thong_kes = await THONG_KE_Model.find()
		console.log('thong kes: ', thong_kes)
		res.status(200).json(thong_kes)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Get_Thong_Ke_By_ID = async (req, res) => {
	/*
	Fetch thong_ke by id thong ke
	:return: json, null if not found anything
	*/

	try {
		const _id = req.body._id
		const thong_ke = await THONG_KE_Model.findById(_id)

		console.log('thong ke by id', thong_ke)
		res.status(200).json(thong_ke)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}

export const Create_Thong_Ke = async (req, res) => {
	/*
	Add new thong_ke to db
	
	required value to create new thong_ke: 
	
		ngay_bat_dau, ngay_ket_thuc
	*/

	try {
		var ngay_bat_dau = req.body.ngay_bat_dau
		var ngay_ket_thuc = req.body.ngay_ket_thuc

		// Find don hang in which ngay_bat_dau <= ngay_giao <= ngay_ket_thuc
		var don_hangs = await Find_Hoa_Don_By_Date(ngay_bat_dau, ngay_ket_thuc)

		// Sum some fields
		var tong = await Compute_Tong_Tien_By_Don_Hangs(don_hangs)


		// Generate new thong_ke
		var thong_ke = { ngay_bat_dau: ngay_bat_dau, ngay_ket_thuc: ngay_ket_thuc,
						 tong_tien_san_pham_ban_duoc: tong[0],
						 tong_tien_giam_boi_voucher: tong[1],
						 tong_doanh_thu: tong[2] }		

		thong_ke = new THONG_KE_Model(thong_ke)

		// Get id_hoa_dons
		var id_don_hangs = []
		for(var indices in don_hangs) {
			id_don_hangs.push(don_hangs[indices]._id)
		}

		// Find id_sp, gia_nhap, gia_ban, sum(so_luong), sum(tong_gia) by id_don_hangs
		var ct_thong_kes = await Find_San_Pham_By_ID_Don_Hangs(id_don_hangs)

		// Compute tong_gia_nhap, tong_doanh_thu, tong_loi_nhuan
		var tong_tien = Compute_Tong_Tien_By_CT_Thong_Kes(ct_thong_kes, thong_ke)
		thong_ke.tong_gia_nhap = tong_tien[0]
		thong_ke.tong_doanh_thu = tong_tien[1]
		thong_ke.tong_loi_nhuan = tong_tien[2]

		// Add thong_ke to db
		await Add_Thong_Ke(thong_ke)

		// Add chi_tiet_thong_ke
		for(var ct_tk of ct_thong_kes) {
			var ct_tk = { id_thong_ke: thong_ke._id, 
						  id_san_pham: ct_tk._id.id_san_pham,
						  gia_nhap: ct_tk._id.gia_nhap,
						  gia_ban: ct_tk._id.gia_ban,
						  mau_sac: ct_tk._id.mau_sac,
						  tong_so_luong_da_ban: ct_tk.tong_so_luong_da_ban,
						  tong_tien: ct_tk.tong_tien }

			ct_tk = new CT_THONG_KE_Model(ct_tk)

			await Add_CT_Thong_Ke(ct_tk)
		}

		//console.log('ct_tk: ', ct_thong_kes)
		//console.log('thong_ke', thong_ke)

		res.status(200).json(thong_ke)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}
