import React from 'react'

function EditStaffLayout(props) {
  return (
    <>
      <h1>Add New Staff</h1>
      <div className="form-wrapper">
        <table className="table-new-staff">
          <tr className="name">
            <td className="td-label">Full Name </td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="text" value={props.nameStaff} onChange={props.nameHandler}/>
            </td>
          </tr>
          <tr className="email-profile">
            <td className="td-label">Email</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="email" value={props.email} onChange={props.emailHandler}/>
            </td>
          </tr>
          <tr className="password-change">
            <td className="td-label">Password</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="password" value={props.pass}  onChange={props.passHandler}/>
            </td>
          </tr>
          <tr className="phone">
            <td className="td-label">Tel</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input className="text-field" type="number" value={props.tele} onChange={props.teleHandler}/>
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
                value="true"
                onChange={props.genderHandler}
                checked={props.gender === true ? "true" : null}
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
                onChange={props.genderHandler}
                checked={props.gender === false ? "true" : null}
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
              <input className="text-field" type="text" value={props.address} onChange={props.addressHandler}/>
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
                onChange={props.roleHandler}
                checked={props.role === 0 ? "true" : null}
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
                onChange={props.roleHandler}
                checked={props.role === 1 ? "true" : null}
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
          <tr className="role">
            <td className="td-label">Status</td>
            <td className="td-input" style={{ paddingLeft: "10px" }}>
              <input
                class="form-check-input"
                type="radio"
                name="flexCheckDefault"
                id="flexCheckDefault"
                style={{ width: "19px", height: "19px" }}
                value="true"
                onChange={props.statusHandler}
                checked={props.status ? "true" : null}
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
                Active
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="flexCheckDefault"
                id="flexCheckDefault"
                style={{ width: "19px", height: "19px" }}
                value="false"
                onChange={props.statusHandler}
                checked={props.status === "false" ? "true" : null}
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
                Off
              </label>
            </td>
          </tr>
          <tr className="btn">
            <td></td>
            <td>
              <button className="btn-add" onClick={props.editStaff}>
                Save change
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default EditStaffLayout
