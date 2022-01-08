import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState, Fragment } from "react";
import EditableMaterial from "./EditableRow/EditableMaterial";
import EditableType from "./EditableRow/EditableType";
import ReadOnlyMaterial from "./ReadOnly/ReadOnlyMaterial";
import ReadOnlyType from "./ReadOnly/ReadOnlyType";

function TypeAndMaterial() {
  const [type, setType] = useState([]);
  const [material, setMaterial] = useState([]);
  const [editId, setEditId] = useState(2);
  const handleEditClick = (event, types) => {
    event.preventDefault();
    setEditId(types);
  }
  const handleCancelClick = () => {
    setEditId(null);
  };
  const updateData = () => {
    axios.post("https://stationery-store-tmdt.herokuapp.com/loai_sp/")
  }
  useEffect(() => {
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/loai_sp/")
      .then((res) => {
        setType(res.data);
      });
      axios
      .get("https://stationery-store-tmdt.herokuapp.com/chat_lieu/")
      .then((res) => {
        setMaterial(res.data);
      });
  }, []);
  return (
    <form style={{display: "flex", width: "1144px"}}>
      <table class="table table-hover" style={{ backgroundColor: "#fff", width: "550px", marginRight: "30px" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {type.map((item, index) => (
            <Fragment>
              {editId === item._id ? (
                <EditableType index={index} item={item} />
              ) : (
                <ReadOnlyType index={index} item={item} handleEditClick={handleEditClick} handleCancelClick={handleCancelClick}/>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      <table class="table table-hover" style={{ backgroundColor: "#fff", width: "550px" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {material.map((item, index) => (
            <Fragment>
              {editId === item._id ? (
                <EditableMaterial index={index} item={item} />
              ) : (
                <ReadOnlyMaterial index={index} item={item} handleEditClick={handleEditClick} handleCancelClick={handleCancelClick}/>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default TypeAndMaterial;
