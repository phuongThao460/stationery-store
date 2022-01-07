import React, { createRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddNewStaff(props) {
  const nameStaff = createRef();
  const tele = createRef();
  const email = createRef();
  const pass = createRef();
  const address = createRef();
  const gender = createRef();
  const role = createRef();
  let navigate = useNavigate();
  const addNewStaff = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/nhan_vien/create", {
        email: email.current.value,
        sdt: tele.current.value,
        dia_chi: address.current.value,
        ten_nv: nameStaff.current.value,
        password: pass.current.value,
        gioi_tinh: gender.current.value,
        role: role.current.value,
      })
      .then(() => {
        alert("add successfull");
        navigate("/staff")
      });
  };
  return (
    <>
    <h1>Add New Staff</h1>
      <div className="form-wrapper">
        <table className="table-new-staff">
          <tr className="name">
            <td className="td-label">Full Name </td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="text" ref={nameStaff} />
            </td>
          </tr>
          <tr className="email-profile">
            <td className="td-label">Email</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="email" ref={email} />
            </td>
          </tr>
          <tr className="password-change">
            <td className="td-label">Password</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="password" ref={pass} />
            </td>
          </tr>
          <tr className="phone">
            <td className="td-label">Tel</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="number" ref={tele} />
            </td>
          </tr>
          <tr className="gender">
            <td className="td-label">Gender</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input
                class="form-check-input"
                type="checkbox"
                name="flexCheckDefault"
                id="flexCheckDefault"
                style={{
                  width: "19px",
                  height: "19px",
                }}
                value="trrue"
                ref={gender}
              />
              <label
                class="form-check-label"
                for="flexCheckDefault"
                style={{
                  marginLeft: "3px",
                  marginRight: "20px",
                  marginTop: "3px",
                }}
              >
                Female{" "}
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                style={{
                  width: "19px",
                  height: "19px",
                }}
                value="false"
                ref={gender}
              />
              <label
                class="form-check-label"
                for="flexRadioDefault1"
                style={{
                  marginLeft: "3px",
                  marginRight: "20px",
                  marginTop: "3px",
                }}
              >
                Male{" "}
              </label>
            </td>
          </tr>
          <tr className="address">
            <td className="td-label">Address</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="text" ref={address} />
            </td>
          </tr>
          <tr className="role">
            <td className="td-label">Role</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input
                class="form-check-input"
                type="checkbox"
                name="flexCheckDefault"
                id="flexCheckDefault"
                style={{ width: "19px", height: "19px" }}
                value="0"
                ref={role}
              />
              <label
                class="form-check-label"
                for="flexCheckDefault"
                style={{
                  marginLeft: "3px",
                  marginRight: "20px",
                  marginTop: "3px",
                }}
              >
                Admin
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                name="flexCheckDefault"
                id="flexCheckDefault"
                style={{ width: "19px", height: "19px" }}
                value="1"
                ref={role}
              />
              <label
                class="form-check-label"
                for="flexCheckDefault"
                style={{
                  marginLeft: "3px",
                  marginRight: "20px",
                  marginTop: "3px",
                }}
              >
                Staff
              </label>
            </td>
          </tr>
          <tr className="btn">
            <td></td>
            <td>
              <button className="btn-add" onClick={addNewStaff}>
                Add
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default AddNewStaff;
