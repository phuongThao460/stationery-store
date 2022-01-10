/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const EditableMaterial = ({ index, item, handleCancelClick }) => {
  const [name, setName] = useState("");
  const materialNameHandler = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    setName(item.ten_chat_lieu);
  }, []);
  const handleEditSubmit = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/chat_lieu/update", {
        _id: item._id,
        ten_chat_lieu: name,
      })
      .then(() => {
        window.location.reload();
      });
  };
  return (
    <tr key={index}>
      <th scope="row">{item._id.substr(14)}</th>
      <td>
        <input
          type="text"
          required="required"
          value={name}
          onChange={materialNameHandler}
        />
      </td>
      <td>
        <button className="btn-edit" onClick={handleEditSubmit}>
          Save
        </button>
        <button className="btn-delete"  onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableMaterial;
