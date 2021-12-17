import React from "react";

function EditAccount() {
  return (
    <>
      <div className="main-right">
        <h2 className="main-right-title">My Account</h2>
        <form className="form-wrapper">
          <table>
            <tr className="name">
              <td className="td-label">Full name</td>
              <td>
                <input className="text-field" type="text" />
              </td>
            </tr>

            <tr className="email">
              <td className="td-label">Email</td>
              <td>
                <input className="text-field" type="email" />
              </td>
            </tr>
            <tr className="phone">
              <td className="td-label">Phone number</td>
              <td>
                <input className="text-field" type="number" />
              </td>
            </tr>
          </table>
          <div className="btn">
            <button className="btn-edit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditAccount;
