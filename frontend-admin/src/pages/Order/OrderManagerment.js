import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderView from "./OrderView";
function OrderManagerment() {
  const [toggleState, setToggleState] = useState(1);
  const [orderList, setOrderList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [idOrder, setIdOrde] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [customer, setCustomer] = useState(null);
  const [note, setNote] = useState("");
  const [total, setTotal] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [ship, setShip] = useState("");
  const [status, setStatus] = useState("");
  const [saleTax, setSaleTax] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getAllOrder = async () => {
    try {
      const data = await axios.get("https://stationery-store-tmdt.herokuapp.com/don_hang/");
      setOrderList(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = (idOrder, event) => {
    axios.post("https://stationery-store-tmdt.herokuapp.com/don_hang/update_by_id", {
      _id: idOrder,
      id_ttdh: event,
    });
  };
  useEffect(() => {
    getAllOrder();
  }, []);
  return (
    <>
      <h1>Produts</h1>
      <div className="tabs-container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            New
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Confirm
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Shipping
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Finished
          </button>
          <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            Cancelled
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <table class="table table-hover">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">ID</th>
                  <th scope="col">Date Order</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "New" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id.substr(14)}</th>
                      <td>
                        {new Date(item.ngay_dat).toLocaleDateString("en-GB")}
                      </td>
                      <td style={{ textAlign: "end" }}>${item.tong_tien.toFixed(2)}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() =>
                            updateStatus(item._id, "61a2494520a54c9a7f3b02a9")
                          }
                        >
                          Confirm
                        </button>
                        <button
                          className="btn-view"
                          onClick={() => {
                            setModalShow(true);
                            setIdOrde(item._id);
                            setDateIn(item.ngay_dat);
                            setDateOut(item.ngay_giao);
                            setCustomer(item.id_ttkh);
                            setNote(item.ghi_chu);
                            setSubtotal(item.tong_phu);
                            setTotal(item.tong_tien);
                            setShip(item.phi_ship);
                            setStatus(item.id_ttdh.trang_thai);
                            setSaleTax(item.tong_gia_giam_boi_voucher);
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <table class="table table-hover">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">ID</th>
                  <th scope="col">Date Order</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "Confirm" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id.substr(14)}</th>
                      <td>
                        {new Date(item.ngay_dat).toLocaleDateString("en-GB")}
                      </td>
                      <td>${(item.tong_tien).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() =>
                            updateStatus(item._id, "61a2496d20a54c9a7f3b02cd")
                          }
                        >
                          Shipping
                        </button>
                        <button
                          className="btn-view"
                          onClick={() => {
                            setModalShow(true);
                            setIdOrde(item._id);
                            setDateIn(item.ngay_dat);
                            setDateOut(item.ngay_giao);
                            setCustomer(item.id_ttkh);
                            setNote(item.ghi_chu);
                            setSubtotal(item.tong_phu);
                            setTotal(item.tong_tien);
                            setShip(item.phi_ship);
                            setSaleTax(item.tong_gia_giam_boi_voucher)
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <table class="table table-hover">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">ID</th>
                  <th scope="col">Date Order</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "Shipping" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id.substr(14)}</th>
                      <td>
                        {new Date(item.ngay_dat).toLocaleDateString("en-GB")}
                      </td>
                      <td>${(item.tong_tien).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() =>
                            updateStatus(item._id, "61a2497920a54c9a7f3b02d6")
                          }
                        >
                          Finished
                        </button>
                        <button
                          className="btn-view"
                          onClick={() => {
                            setModalShow(true);
                            setIdOrde(item._id);
                            setDateIn(item.ngay_dat);
                            setDateOut(item.ngay_giao);
                            setCustomer(item.id_ttkh);
                            setNote(item.ghi_chu);
                            setSubtotal(item.tong_phu);
                            setTotal(item.tong_tien);
                            setShip(item.phi_ship);
                            setSaleTax(item.tong_gia_giam_boi_voucher)
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <table class="table table-hover">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">ID</th>
                  <th scope="col">Date Order</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "Finished" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id.substr(14)}</th>
                      <td>
                        {new Date(item.ngay_dat).toLocaleDateString("en-GB")}
                      </td>
                      <td>${(item.tong_tien).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn-view"
                          onClick={() => {
                            setModalShow(true);
                            setIdOrde(item._id);
                            setDateIn(item.ngay_dat);
                            setDateOut(item.ngay_giao);
                            setCustomer(item.id_ttkh);
                            setNote(item.ghi_chu);
                            setSubtotal(item.tong_phu);
                            setTotal(item.tong_tien);
                            setShip(item.phi_ship);
                            setSaleTax(item.tong_gia_giam_boi_voucher)
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <table class="table table-hover">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">ID</th>
                  <th scope="col">Date Order</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "Cancelled" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id.substr(14)}</th>
                      <td>{new Date(item.ngay_dat).toLocaleDateString()}</td>
                      <td>${(item.tong_tien).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn-view"
                          onClick={() => {
                            setModalShow(true);
                            setIdOrde(item._id);
                            setDateIn(item.ngay_dat);
                            setDateOut(item.ngay_giao);
                            setCustomer(item.id_ttkh);
                            setNote(item.ghi_chu);
                            setSubtotal(item.tong_phu);
                            setTotal(item.tong_tien);
                            setShip(item.phi_ship);
                            setSaleTax(item.tong_gia_giam_boi_voucher)
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {modalShow ? (
        <OrderView
          show={modalShow}
          idOrder={idOrder}
          onHide={() => setModalShow(false)}
          dateIn={dateIn}
          dateOut={dateOut}
          note={note}
          subtotal={subtotal}
          total={total}
          ship={ship}
          customer={customer}
          status={status}
          saleTax={saleTax}
        />
      ) : null}
    </>
  );
}

export default OrderManagerment;
