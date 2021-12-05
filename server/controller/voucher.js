import { VOUCHER_Model, Is_Voucher_On_Time_To_Sale,
		Set_Tinh_Trang_Voucher, Find_TKKH_Meets_The_Conditions,
		Set_So_Luong_Voucher } from '../models/VOUCHER_Model.js'
	 

export const Get_Vouchers = async (req, res) => {
	/*
	Fetch all vouchers in db
	:return: Array
	*/

	try {
		const vouchers = await VOUCHER_Model.find()
		console.log('vouchers: ', vouchers)
		res.status(200).json(vouchers)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}


export const Get_Voucher_By_ID = async (req, res) => {
	/*
	Fetch voucher by id voucher
	:return: json, null if not found anything
	*/

	try {
		const _id = req.body._id
		const voucher = await VOUCHER_Model.findById(_id)

		console.log('voucher by id', voucher)
		res.status(200).json(voucher)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}


export const Create_Voucher = async (req, res) => {
	/*
	Add new voucher to db
	
	required value to create new voucher: 
	
		tong_tien_mua_hang_tich_luy_toi_thieu,

		ngay_bat_dau_tich_luy, ngay_ket_thuc_tich_luy, 

		so_ngay_kich_hoat_tai_khoan_toi_thieu, phan_tram_giam,

		ngay_bat_dau_ap_dung, ngay_ket_thuc_ap_dung
	*/

	try {
		var voucher = req.body
		voucher = new VOUCHER_Model(voucher)

		// Set tinh trang voucher 
		var status = Is_Voucher_On_Time_To_Sale(voucher)
		voucher = Set_Tinh_Trang_Voucher(voucher, status)

		// Set so luong voucher
		var tkkh_meet_the_conds = await Find_TKKH_Meets_The_Conditions(voucher)
		//console.log(tkkh_meet_the_conds.length)
		voucher = Set_So_Luong_Voucher(voucher, tkkh_meet_the_conds.length)

		await voucher.save()
		console.log('voucher: ', voucher)
		res.status(200).json(voucher)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}


export const Test = async (req, res) => {
	/*
	Add new voucher to db
	
	required value to create new voucher: tong_tien_mua_hang_tich_luy_toi_thieu,
		thoi_gian_mua, thoi_gian_kich_hoat_tai_khoan_toi_thieu, phan_tram_giam,
		ngay_bat_dau, ngay_ket_thuc, ngay_tao
	*/

	try {
		var voucher = req.body

		var rs = await Find_TKKH_Meets_The_Conditions(voucher)

		console.log('voucher: ', rs)
		res.status(200).json(rs)
	} catch(err) {
		res.status(500).json({ error: err })
	}
}



