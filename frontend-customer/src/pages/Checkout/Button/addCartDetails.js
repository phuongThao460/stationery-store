import axios from "axios";
export const addCartDetails = ({cusAccountInfo, customerInfo, total, voucher, vouchers, carts, array, setShipping, navigate}) => {
  if (cusAccountInfo != null) {
    const createOrder = async () => {
      try {
        const data = await axios.post(
          "http://localhost:8000/don_hang/create_don_hang",
          {
            ngay_dat: new Date().toLocaleDateString(),
            ngay_giao: new Date().toLocaleDateString(),
            id_ttkh: cusAccountInfo._id,
            id_ttdh: "61a2492120a54c9a7f3b028a",
            ghi_chu: "None",
            tong_phu: total,
            tong_gia_giam_boi_voucher: (total * vouchers) / 100,
            id_phuong_thuc_thanh_toan: "61aec7868d6b567f56418a40",
            tong_tien: total - (total * vouchers) / 100,
            id_voucher: voucher,
            id_phuong: cusAccountInfo.id_phuong,
            dia_chi: cusAccountInfo.dia_chi,
          }
        );
        setShipping(data.data.phi_ship);
        carts.forEach((element) => {
          array.push({
            so_luong: element.count,
            gia_ban: element.gia_ban_hien_tai,
            id_san_pham: element.product,
            id_don_hang: data.data._id,
            tong_gia: element.count * element.gia_ban_hien_tai,
          });
        });
        array.forEach((item) => {
          axios({
            method: "post",
            url: "http://localhost:8000/ct_dh/create",
            data: item,
          }).then(() => {
            navigate("/notificate");
            window.localStorage.removeItem("cart");
            window.localStorage.removeItem("total");
            window.localStorage.removeItem("customer");
            window.localStorage.removeItem("id_voucher");
            window.location.reload();
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    createOrder();
  }
  if (customerInfo != null) {
    const createOrder = async () => {
      try {
        const data = await axios.post(
          "http://localhost:8000/don_hang/create_don_hang",
          {
            ngay_dat: new Date().toLocaleDateString(),
            ngay_giao: new Date().toLocaleDateString(),
            id_ttkh: customerInfo._id,
            id_ttdh: "61a2492120a54c9a7f3b028a",
            ghi_chu: "None",
            tong_phu: total,
            tong_gia_giam_boi_voucher: 0,
            id_phuong_thuc_thanh_toan: "61aec7868d6b567f56418a40",
            tong_tien: total,
            id_phuong: customerInfo.id_phuong,
            dia_chi: customerInfo.dia_chi,
          }
        );
        setShipping(data.data.phi_ship);
        carts.forEach((element) => {
          array.push({
            so_luong: element.count,
            gia_ban: element.gia_ban_hien_tai,
            id_san_pham: element.product,
            id_don_hang: data.data._id,
            tong_gia: element.count * element.gia_ban_hien_tai,
          });
        });
        array.forEach((item) => {
          axios({
            method: "post",
            url: "http://localhost:8000/ct_dh/create",
            data: item,
          }).then(() => {
            navigate("/notificate");
            window.localStorage.removeItem("cart");
            window.localStorage.removeItem("total");
            window.localStorage.removeItem("customer");
            window.localStorage.removeItem("id_voucher");
            window.location.reload();
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    createOrder();
  }
};