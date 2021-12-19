import mongoose from "mongoose";
import opencage from "opencage-api-client";
import haversine from "haversine-distance";

import { PHUONG_Model } from "./PHUONG_Model.js";
import { QUAN_Model } from "./QUAN_Model.js";
import { THANH_PHO_Model } from "./THANH_PHO_Model.js";
import { Get_Vouchers_By_ID_TTKH, VOUCHER_Model } from "./VOUCHER_Model.js";
import { Find_CTDH_By_DonHang } from "./CT_DON_HANG_Model.js";
import { Find_TKKH_By_TTKH, Add_San_Pham_To_Feedback } from "./TKKH_Model.js";

// ==============================================
// 				CONSTANT DEFINITIONS
// ==============================================

const starting_location =
  "828, đường sư vạn hạnh, quận 10, thành phố hồ chí minh";
const API_KEY = "8e6ae120db9a42bc82a32ff38756e4fe";
const initial_shipping_fee = 1;
const intial_km = 2;
const shipping_fee_per_km = 0.5;
const TRANG_THAI_DON_HANG_THANH_CONG = "61a2497920a54c9a7f3b02d6";

// ==============================================
// 				SCHEMA DEFINITION
// ==============================================

const schema = new mongoose.Schema(
  {
    ngay_dat: {
      type: Date,
      required: true,
      default: new Date(),
    },
    ngay_giao: {
      type: Date,
      required: true,
      default: new Date(),
    },
    id_ttkh: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "THONG_TIN_KHACH_HANG",
    },
    id_ttdh: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "TRANG_THAI_DH",
    },
    ghi_chu: {
      type: String,
    },
    tong_phu: {
      type: Number,
      default: 0,
    },
    phi_ship: {
      type: Number,
      default: 0,
    },
    tong_gia_giam_boi_voucher: {
      type: Number,
      default: 0,
    },
    id_voucher: {
      type: mongoose.Types.ObjectId,
      ref: "VOUCHER",
      default: null,
    },
    id_phuong_thuc_thanh_toan: {
      type: mongoose.Types.ObjectId,
      ref: "PHUONG_THUC_THANH_TOAN",
    },
    tong_tien: {
      type: Number,
      default: 0,
    },
    dia_chi_giao: {
      type: String,
    },
  },
  { timestamps: true }
);

export const DON_HANG_Model = mongoose.model("DON_HANG", schema);

// ==============================================
// 				FUNCTION DEFINITIONS
// ==============================================

const Get_Phuong_Quan_Thanh_Pho_By_ID_Phuong = async (id_phuong) => {
  /*
	Get phuong, quan, thanh pho by id phuong

	:return: Array, length = 3, [phuong, quan, thanh_pho]
	*/

  const phuong = await PHUONG_Model.findById(id_phuong);
  const quan = await QUAN_Model.findById(phuong.id_quan);
  const tp = await THANH_PHO_Model.findById(quan.id_thanh_pho);

  return [phuong.phuong_xa, quan.quan_huyen, tp.ten_thanh_pho];
};

const Get_Number_And_Street_Name_From_Address = (address) => {
  /*
	Get number, street name from address

	:return: Array, length = 2, [number, street name]
	*/

  var number = "";
  var street = "";

  address = address.split(" ");

  let contain_digit_reg = new RegExp("^\\d+");

  for (var word of address) {
    if (contain_digit_reg.test(word)) {
      number += word;
    } else {
      street += word + " ";
    }
  }

  // Remove the last " "
  street = street.substring(0, street.length - 1);

  return [number, street];
};

export const Set_Dia_Chi_Giao_Hang = async (
  don_hang,
  dia_chi_giao,
  id_phuong
) => {
  /*
	Set dia_chi_giao for don_hang

	:return: json
	*/

  const dia_chi = Get_Number_And_Street_Name_From_Address(dia_chi_giao);
  const phuong_quan_tp = await Get_Phuong_Quan_Thanh_Pho_By_ID_Phuong(
    id_phuong
  );

  var number = dia_chi[0];
  var street_name = dia_chi[1];
  var quan = phuong_quan_tp[1];
  var tp = phuong_quan_tp[2];

  // Replace 'district' to 'quận'
  quan = quan.replace("District", "quận");

  don_hang.dia_chi_giao =
    number + ", đường " + street_name + ", " + quan + ", " + tp;

  return don_hang;
};

const Get_Lat_And_Long_From_Location = async (location) => {
  /*
	Get the latitude and longitude from the specified location

	:return: obj: { lat: <value>, lng: <value> }
	*/

  const data = await opencage.geocode({
    q: location,
    language: "vi",
    key: API_KEY,
  });

  if (data.total_results == 0) {
    throw new Error("Location is not valid");
  } else {
    return data.results[0].geometry;
  }
};

export const Compute_Distance_Between_Two_Location = async (destination) => {
  /*
	Compute the distance (km) between 2 location by haversine 
	distance formula (straight line from A to B)
	
	:return: number
	*/

  try {
    var start_lat_long = await Get_Lat_And_Long_From_Location(
      starting_location
    );

    var des_lat_long = await Get_Lat_And_Long_From_Location(destination);

    // Compute distance (km)
    var dis = haversine(start_lat_long, des_lat_long);
    // Convert unit (m) to unit (km), and round
    dis = (dis / 1000).toFixed(3);

    return dis;
  } catch (err) {
    console.log(err);
  }
};

const Compute_Shipping_Fee = (distance) => {
  /*
	Calculate shipping fee from distance of starting location
	and destination

	:return: number
	*/

  var shipping_fee = initial_shipping_fee;

  if (distance <= 2) {
    return shipping_fee;
  } else {
    distance -= intial_km;
    var round_distance = Math.round(distance);
    shipping_fee += round_distance * shipping_fee_per_km;
  }

  return shipping_fee;
};

export const Set_Shipping_Fee = (don_hang, distance) => {
  /*
	Set phi_ship for don_hang

	:return: json
	*/

  var shipping_fee = Compute_Shipping_Fee(distance);

  don_hang.phi_ship = shipping_fee;

  return don_hang;
};

export const Set_Total = (don_hang) => {
  /*
  Set total for don_hang

  :return: json
  */

  var shipping_fee = don_hang.phi_ship;
  var subtotal = don_hang.tong_phu;
  var voucher_discount = don_hang.tong_gia_giam_boi_voucher;

  var total = subtotal - voucher_discount + shipping_fee;
  don_hang.tong_tien = total;

  return don_hang;
};

export const Set_Total_Voucher_Discount = async (don_hang) => {
  /*
  Set total voucher discount for don_hang

  :return: json
  */

  if (don_hang.id_voucher != null) {
    var voucher = await VOUCHER_Model.findById(don_hang.id_voucher);
    var discount = voucher.phan_tram_giam / 100;
    var subtotal = don_hang.tong_phu;

    var total_discount_by_voucher = subtotal * discount;
    don_hang.tong_gia_giam_boi_voucher = total_discount_by_voucher;
  }

  return don_hang;
};

export const Add_SanPham_To_List_Feedback_Of_Account = async (don_hang) => {
  /*
  When trang_thai_don_hang = giao_thanh_cong then add san_pham to
  list feedback of account
  */

  try {
    var id_trang_thai_dh = don_hang.id_ttdh;
    var id_don_hang = don_hang._id;
    var id_ttkh = don_hang.id_ttkh;

    var tai_khoan_kh = await Find_TKKH_By_TTKH(id_ttkh);

    // Check if trang_thai_dh = giao_thanh_cong && user has account
    if (
      id_trang_thai_dh == TRANG_THAI_DON_HANG_THANH_CONG &&
      tai_khoan_kh != null
    ) {
      var ctdh_s = await Find_CTDH_By_DonHang(id_don_hang);

      // Add id_san_pham to list feedback
      ctdh_s.forEach((ctdh) =>
        Add_San_Pham_To_Feedback(tai_khoan_kh._id, ctdh.id_san_pham)
      );
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
