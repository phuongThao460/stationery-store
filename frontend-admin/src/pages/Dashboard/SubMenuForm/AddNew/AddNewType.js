import React, { createRef } from "react";
import axios from "axios";

function AddNewType() {
  const nameType = createRef();
  const addNewType = () => {
    axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/loai_sp/create_loai_sp",
        {
          ten_loai_sp: nameType.current.value,
        }
      )
      .then(() => {
        alert("Add new successful");
        window.location.reload();
      });
  };
  return (
    <div className="add-new" style={{ marginBottom: "20px" }}>
      <input type="text" className="name" ref={nameType} />
      <button className="btn-add" onClick={addNewType}>
        Add New
      </button>
    </div>
  );
}

export default AddNewType;
