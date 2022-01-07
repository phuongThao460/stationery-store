import axios from "axios";
import React, { useState, useEffect } from "react";
import StaffView from './StaffView'
function EmployeeManagement() {
  const [staffs, setStaffs] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [header, setHeader] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sexual, setSexual] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [role, setRole] = useState("");
  //const [array, setArray] = useState([])

  useEffect(() => {
    const getAllStaff = async () => {
      try {
        const data = await axios.get("https://stationery-store-tmdt.herokuapp.com/nhan_vien");
        setStaffs(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllStaff();
    console.log("just run once");
  }, []);

  return (
    <div>
      <h1>Staff Management</h1>
      <table className="table table-hover" style={{ backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th scope="col" style={{ width: "100px" }}>
              ID
            </th>
            <th scope="col">Staff's Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col" style={{ width: "200px", textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {staffs.length !== 0
            ? staffs.map((item, index) => (
                <tr key={index}>
                  <th scope="row" style={{ width: "167px" }}>
                    {item._id.substr(14)}
                  </th>
                  <td>{item.ten_nv}</td>
                  <td>{item.email}</td>
                  <td style={{ textAlign: "end", width: "164px" }}>
                    {item.sdt}
                  </td>
                  <td style={{ width: "200px", textAlign: "center" }}>
                    <button
                      className="btn-view"
                      onClick={() => {
                        setModalShow(true);
                        setHeader(item._id);
                        setName(item.ten_nv);
                        setEmail(item.email);
                        setPhone(item.sdt);
                        setSexual(item.gioi_tinh ? "Female" : "Male");
                        setStreetNumber(item.dia_chi);
                        setRole(item.role === 0 ? "Admin" : "Staff")
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {modalShow ? (
        <StaffView
          show={modalShow}
          onHide={() => setModalShow(false)}
          header={header}
          name={name}
          email={email}
          phone={phone}
          sexual={sexual}
          streetnumber={streetNumber}
          role={role}
        />
      ) : null}
    </div>
  )
}

export default EmployeeManagement
