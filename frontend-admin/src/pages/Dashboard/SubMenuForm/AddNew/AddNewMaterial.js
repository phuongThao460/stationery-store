import React, { createRef } from "react";
import axios from "axios";
function AddNewMaterial() {
  const nameMaterial = createRef();
  const addNewMaterial = () => {
    axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/chat_lieu/create_chat_lieu",
        {
          ten_chat_lieu: nameMaterial.current.value,
        }
      )
      .then(() => window.location.reload());
  };
  return (
    <div className="add-new" style={{ marginBottom: "20px" }}>
      <input type="text" className="name" ref={nameMaterial} />
      <button className="btn-add" onClick={() => addNewMaterial()}>
        Add new
      </button>
    </div>
  );
}

export default AddNewMaterial;
