import mongoose from 'mongoose'
import opencage from 'opencage-api-client'
import haversine from 'haversine-distance'


// ==============================================
// 				CONSTANT DEFINITIONS
// ==============================================

const starting_location = '828, đường sư vạn hạnh, quận 10, thành phố hồ chí minh'
const API_KEY = '8e6ae120db9a42bc82a32ff38756e4fe'

// ==============================================
// 				SCHEMA DEFINITION
// ==============================================

const schema = new mongoose.Schema({
	ngay_dat: {
		type: Date,
		required: true,
		default: new Date()
	},
	ngay_giao: {
		type: Date,
		required: true,
		default: new Date()
	},
	id_ttkh: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "THONG_TIN_KHACH_HANG"
	},
	id_ttdh: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "TRANG_THAI_DH"
	},
	ghi_chu: {
		type: String
	},
	tong_phu: {
		type: Number,
		default: 0
	},
	phi_ship: {
		type: Number,
		default: 0
	},
	tong_gia_giam_boi_voucher: {
		type: Number,
		default: 0
	},
	id_voucher: {
		type: mongoose.Types.ObjectId,
		ref: "VOUCHER",
		default: null
	},
	id_phuong_thuc_thanh_toan: {
		type: mongoose.Types.ObjectId,
		ref: "PHUONG_THUC_THANH_TOAN"
	},
	tong_tien: {
		type: Number,
		default: 0
	},
	dia_chi_giao: {
		type: String
	}
}, { timestamps: false })

export const DON_HANG_Model = mongoose.model('DON_HANG', schema)


// ==============================================
// 				FUNCTION DEFINITIONS
// ==============================================

const Format_Raw_To_Compute_Type_Location = location => {
	/*
	Formatting raw location to standard type location 
	to be able for `opencage` finding the longitude and latitude

	:return: string, formated type: số_nhà, tên đường, quận, thành phố
	*/
}

const Get_Lat_And_Long_From_Location = async location => {
	/*
	Get the latitude and longitude from the specified location

	:return: obj: { lat: <value>, lng: <value> }
	*/

	const data = await opencage.geocode({ q: location, language: 'vi', key: API_KEY })

	if(data.total_results == 0) {
		throw new Error('Location is not valid')
	} else {
		return data.results[0].geometry
	}
}

const Compute_Distance_Between_Two_Location = async destination => {
	/*
	Compute the distance (km) between 2 location by haversine 
	distance formula (straight line from A to B)
	
	:return: number
	*/

	try {
		start_lat_long = await Get_Lat_And_Long_From_Location(starting_location)

		destination = Format_Raw_To_Compute_Type_Location(destination)
		des_lat_long = await Get_Lat_And_Long_From_Location(destination)

		// Compute distance (km)
		var dis = haversine(start_lat_long, des_lat_long)
		// Convert unit (m) to unit (km), and round
		dis = (dis / 1000).toFixed(3)

		return dis
	} catch(err) {
		console.log(err)
	}
}