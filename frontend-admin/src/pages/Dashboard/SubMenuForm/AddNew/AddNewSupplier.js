import axios from "axios";
import React from "react";
import { createRef } from "react";

function AddNewSupplier({handleCancelAdd}) {
  const name = createRef();
  const email = createRef();
  const tele = createRef();
  const address = createRef();

  const addNewSupp = () => {
    axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/nha_cc/create_nha_cc",
        {
          ten_nha_cc: name.current.value,
          email: email.current.value,
          sdt: tele.current.value,
          dia_chi: address.current.value,
        }
      )
      .then(() => {
        alert("Add new succesful");
        window.location.reload();
      });
  };
  return (
    <div className="form-horizontal" style={{width: "659px"}}>
      <div style={{ display: "flex" }}>
        <div className="form-group" style={{ marginRight: "42px" }}>
          <label className="control-label col-sm-2">Name</label>
          <div className="col-sm-15">
            <input type="text" className="form-control" ref={name} />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Tele.</label>
          <div className="col-sm-15">
            <input type="text" className="form-control" ref={tele} />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2">Email</label>
        <div className="col-sm-15">
          <input type="text" className="form-control" ref={email} />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2">Address</label>
        <div className="col-sm-15">
          <input type="text" className="form-control" ref={address} />
        </div>
      </div>
      <div style={{float: "right", marginBottom: "20px", marginRight: "0"}}>
        <button onClick={() => addNewSupp()} className="btn-add" style={{width: "120px"}}>
          Add New
        </button>
        <button onClick={handleCancelAdd} className="btn-delete" style={{width: "120px", marginRight: "0"}}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddNewSupplier;
