import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
function OrderManagerment() {
  const [toggleState, setToggleState] = useState(1);
  const [orderList, setOrderList] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getAllOrder = async () => {
    try {
      const data = await axios.get("http://localhost:8000/don_hang/");
      setOrderList(data.data);
    } catch (err) {
      console.log(err);
    }
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "New" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id}</th>
                      <td>{new Date(item.ngay_dat).toLocaleDateString()}</td>
                      <td>{item.tong_tien}</td>
                      <td>
                      <Link to={"/order/" + item._id}>
                          <button className="btn-view">View</button>
                        </Link>
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "Confirm" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id}</th>
                      <td>{new Date(item.ngay_dat).toLocaleDateString()}</td>
                      <td>{item.tong_tien}</td>
                      <td>
                      <Link to={"/order/" + item._id}>
                          <button className="btn-view">View</button>
                        </Link>
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "Shipping" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id}</th>
                      <td>{new Date(item.ngay_dat).toLocaleDateString()}</td>
                      <td>{item.tong_tien}</td>
                      <td>
                      <Link to={"/order/" + item._id}>
                          <button className="btn-view">View</button>
                        </Link>
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "Finished" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id}</th>
                      <td>{new Date(item.ngay_dat).toLocaleDateString()}</td>
                      <td>{item.tong_tien}</td>
                      <td>
                      <Link to={"/order/" + item._id}>
                          <button className="btn-view">View</button>
                        </Link>
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, index) =>
                  item.id_ttdh.trang_thai === "Cancelled" ? (
                    <tr key={index} style={{ textAlign: "center" }}>
                      <th scope="row">{item._id}</th>
                      <td>{new Date(item.ngay_dat).toLocaleDateString()}</td>
                      <td>{item.tong_tien}</td>
                      <td>
                        <Link to={"/order/" + item._id}>
                          <button className="btn-view">View</button>
                        </Link>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderManagerment;
