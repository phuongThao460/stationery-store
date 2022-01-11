import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StaffView from "./StaffView";
import { BiPlusMedical } from "react-icons/bi";

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
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getAllStaff = async () => {
      try {
        const data = await axios.get(
          "https://stationery-store-tmdt.herokuapp.com/nhan_vien"
        );
        setStaffs(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllStaff();
  }, []);

  return (
    <>
      <div className="hearder">
        <h1>Staff Management</h1>
        <div className="btn">
          <button className="btn-add">
            <Link
              to="/staff/add-new-staff"
              style={{
                textDecoration: "none",
                color: "white",
                wordBreak: "break-word",
                overflow: "hidden",
              }}
            >
              <BiPlusMedical />
              <span>Add New Staff</span>
            </Link>
          </button>
          <button className="btn-add">
            <Link
              to="/products/add-lst-product"
              style={{
                textDecoration: "none",
                color: "white",
                wordBreak: "break-word",
                overflow: "hidden",
              }}
            >
              <BiPlusMedical />
              <span>Add List of Staff</span>
            </Link>
          </button>
        </div>
      </div>

      <table
        className="table table-hover"
        style={{ backgroundColor: "#fff", width: "985px" }}
      >
        <thead>
          <tr>
            <th scope="col" style={{ width: "84px" }}>
              ID
            </th>
            <th scope="col">Staff's Name</th>
            <th scope="col">Email</th>
            <th scope="col">Tele.</th>
            <th scope="col" style={{ textAlign: "center" }}>
              Status
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {staffs.length !== 0
            ? staffs.map((item, index) => (
                <tr key={index}>
                  <th scope="row" style={{ width: "84px" }}>
                    {item._id.substr(14)}
                  </th>
                  <td>{item.ten_nv}</td>
                  <td>{item.email}</td>
                  <td style={{ textAlign: "end" }}>{item.sdt}</td>
                  <td style={{ textAlign: "center" }}>
                    {item.tinh_trang ? "Active" : "Off"}
                  </td>
                  <td style={{ textAlign: "center" }}>
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
                        setRole(item.role === 0 ? "Admin" : "Staff");
                        setStatus(item.tinh_trang ? "Active" : "Off")
                      }}
                    >
                      View
                    </button>
                    <Link to={"/staff/" + item._id}>
                      <button className="btn-edit">Edit</button>
                    </Link>
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
          status={status}
        />
      ) : null}
    </>
  );
}

export default EmployeeManagement;
