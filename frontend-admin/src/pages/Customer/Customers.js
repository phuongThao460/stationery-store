import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomerView from "./CustomerView";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [header, setHeader] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sexual, setSexual] = useState("");
  const [streetNumber, setStreetNumber] = useState("")
  const [street, setStreet] = useState("")
  const getAllCustomer = async () => {
    const data = await axios.get("http://localhost:8000/tkkh");
    setCustomers(data.data);
    //getAddressCustomer(data.data._id)
    //console.log(data.data._id)
  };
  
  useEffect(() => {
    getAllCustomer();
  }, []);
  return (
    <>
      <h1>Customers</h1>
      <table className="table table-hover" style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th scope="col" style={{ width: "100px" }}>
              ID
            </th>
            <th scope="col">Customer's Name</th>
            <th scope="col">Email</th>
            <th scope="col">Accumulated Point</th>
            <th scope="col" style={{width:"200px", textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item, index) => (
            <tr key={index}>
              <th scope="row" style={{width:'167px'}}>
                {item._id.substr(14)}
              </th>
              <td>{item.id_ttkh.ten_kh}</td>
              <td>{item.id_ttkh.email}</td>
              <td style={{textAlign: "end", width:"164px"}}>{item.id_ttkh.diem_tich_luy}</td>
              <td style={{width:"200px", textAlign: "center"}}>
                <button
                  className="btn-view"
                  onClick={() => {
                    setModalShow(true);
                    setHeader(item._id);
                    setName(item.id_ttkh.ten_kh);
                    setEmail(item.id_ttkh.email);
                    setPhone(item.id_ttkh.sdt);
                    setSexual(item.id_ttkh.gioi_tinh ? "Female" : "Male");
                    setStreetNumber(item.id_ttkh.dia_chi);
                    setStreet(item.id_ttkh.id_phuong);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalShow ? (
        <CustomerView
          show={modalShow}
          onHide={() => setModalShow(false)}
          header={header}
          name={name}
          email={email}
          phone={phone}
          sexual={sexual}
          streetnumber={streetNumber}
          street={street}
        />
      ) : null}
    </>
  );
}

export default Customers;
