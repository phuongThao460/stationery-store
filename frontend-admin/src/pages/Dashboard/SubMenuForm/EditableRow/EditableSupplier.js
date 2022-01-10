/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const EditableSupplier = ({ item, handleCancelClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tele, setTele] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setName(item.ten_nha_cc);
    setEmail(item.email);
    setTele(item.sdt);
    setAddress(item.dia_chi);
  }, []);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailNameHandler = (e) => {
    setEmail(e.target.value);
  };
  const teleNameHandler = (e) => {
    setTele(e.target.value);
  };
  const addressNameHandler = (e) => {
    setAddress(e.target.value);
  };
  const handleEditSubmit = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/nha_cc/update", {
        _id: item._id,
        ten_nha_cc: name,
        email: email,
        sdt: tele,
        dia_chi: address
      })
      .then(() => {
        window.location.reload();
      });
  };
  return (
    <tr>
      <th scope="row">{item._id.substr(14)}</th>
      <td>
        <input
          type="text"
          required="required"
          value={name}
          onChange={nameHandler}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          value={tele}
          onChange={teleNameHandler}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          value={email}
          onChange={emailNameHandler}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          value={address}
          onChange={addressNameHandler}
        />
      </td>
      <td>
        <button className="btn-edit" onClick={handleEditSubmit}>
          Save
        </button>
        <button className="btn-delete" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableSupplier;
