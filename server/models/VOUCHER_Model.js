import mongoose from 'mongoose'

import { DON_HANG_Model } from './DON_HANG_Model.js'


// ==========================================
//              MODEL DEFINITIONS
// ==========================================

const schema = new mongoose.Schema({
	tong_tien_mua_hang_tich_luy_toi_thieu: {
		type: Number
	},
	ngay_bat_dau_tich_luy: {
		type: Date
	},
	ngay_ket_thuc_tich_luy: {
		type: Date
	},
	so_ngay_kich_hoat_tai_khoan_toi_thieu: {
		type: Number
	},
	phan_tram_giam: {
		type: Number,
		require: true,
		default: 0
	},
	ngay_bat_dau_ap_dung: {
		type: Date
	},
	ngay_ket_thuc_ap_dung: {
		type: Date
	},
	tinh_trang: {
		type: Boolean
	},
	so_luong_voucher: {
		type: Number
	},
	ngay_tao: {
		type: Date,
		default: new Date()
	},
	so_lan_duoc_su_dung: {
		type: Number,
		default: 0
	}
}, { timestamps: false })

export const VOUCHER_Model = mongoose.model('VOUCHER', schema)


// ==========================================
//              FUNCTION DEFINITIONS
// ==========================================

export const Is_Voucher_On_Time_To_Sale = voucher => {
	/*
	Check whether voucher is on time to sale
	:return : boolean
	*/

	const day_start = voucher.ngay_bat_dau_ap_dung
	const created_day = voucher.ngay_tao

	if(day_start > created_day) {
		return false
	}
	return true
}

export const Set_Tinh_Trang_Voucher = (voucher, status) => {
	/*
	Set or update tinh trang for voucher
	*/

	voucher.tinh_trang = status
	return voucher
}

export const Set_So_Luong_Voucher = () => {
	/*
	Set so luong voucher for voucher
	*/
	return 0
}

export const Increase_Num_Of_Voucher_Applied = () => {
	return	
}

export const Broadcast_Voucher_To_Account = () => {
	/*
	Automatically add id voucher to tai khoan khach hang which met 
	the voucher's conditions
	*/
	return 
}

export const Find_TKKH_Meets_The_Conditions = async voucher => {
	/*
	Find TKKHs which meet the voucher's conditions
	:return: array
	*/

	var tong_tien_mua_hang_tich_luy_toi_thieu = voucher.tong_tien_mua_hang_tich_luy_toi_thieu
	var ngay_bat_dau_tich_luy = new Date(voucher.ngay_bat_dau_tich_luy)
	var ngay_ket_thuc_tich_luy = new Date(voucher.ngay_ket_thuc_tich_luy)
	var so_ngay_kich_hoat_tai_khoan_toi_thieu = voucher.so_ngay_kich_hoat_tai_khoan_toi_thieu
	
	var ngay_kich_hoat_tai_khoan_toi_thieu = new Date()
	ngay_kich_hoat_tai_khoan_toi_thieu.setDate(
		ngay_kich_hoat_tai_khoan_toi_thieu.getDate() - so_ngay_kich_hoat_tai_khoan_toi_thieu)

	console.log(ngay_bat_dau_tich_luy)
	console.log(ngay_ket_thuc_tich_luy)

	try {
		var rs = await DON_HANG_Model.aggregate([

			// Stage 1: Find DONHANG.ngay_giao between ngay bat dau and ngay ket thuc tich luy
			// Eg: ngay_bat_dau_tich_luy <= DONHANG.ngay_giao <= ngay_ket_thuc_tich_luy
			{ $match: { ngay_giao: { $gte: ngay_bat_dau_tich_luy, $lte: ngay_ket_thuc_tich_luy } } },

			// Stage 2: Find ID_TKKT by ID_TTKH 
			{ $lookup: { from: 'tai_khoan_khach_hangs', 
						 localField: 'id_ttkh',
						 foreignField: 'id_ttkh',
						 as: 'tkkh' } },

			// Stage 3: Filter invoices was bought by customer who has account 
			// and when that account activated
			// Eg: tkkh.length = 1 && tkkh.ngay_tao_tk <= ngay_kich_hoat_tai_khoan_toi_thieu
			{ $match: { $and: [
				{ tkkh: { $size: 1 } },
				{ 'tkkh.ngay_tao_tk': { $lt: ngay_kich_hoat_tai_khoan_toi_thieu } }
			] } },

			// Stage 4: Group by ID_TKKH and sum tong_tien
			{ $group: { 
				_id: '$tkkh._id',
				tong_tien_mua_hang_tich_luy: { $sum: '$tong_tien' }
			}},

			// Stage 5: Reshape obj in array
			{ $project: { 
				id_tkkh: { $arrayElemAt: [ "$_id", 0 ] },
				tong_tien_mua_hang_tich_luy: 1,
				_id: 0
			} }

		]).exec()

		console.log(rs)
		return rs
	} catch(err) {
		console.log('err', err)
		return err
	}

}