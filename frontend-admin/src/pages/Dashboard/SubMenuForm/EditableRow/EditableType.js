/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const EditableType = ({ index, item, handleCancelClick }) => {
  const [name, setName] = useState("");
  const typeNameHandler = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    setName(item.ten_loai_sp);
  },[])
  const handleEditSubmit = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/loai_sp/update", {
        _id: item._id,
        ten_loai_sp: name,
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
          onChange={typeNameHandler}
        />
      </td>
      <td>
        <button className="btn-edit" onClick={handleEditSubmit}>
          Save
        </button>
        <button className="btn-delete" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableType;
