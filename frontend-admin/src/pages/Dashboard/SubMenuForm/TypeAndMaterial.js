/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, Fragment, useEffect } from "react";
import AddNewMaterial from "./AddNew/AddNewMaterial";
import AddNewType from "./AddNew/AddNewType";
import EditableMaterial from "./EditableRow/EditableMaterial";
import EditableType from "./EditableRow/EditableType";
import ReadOnlyMaterial from "./ReadOnly/ReadOnlyMaterial";
import ReadOnlyType from "./ReadOnly/ReadOnlyType";

function TypeAndMaterial() {
  const [type, setType] = useState([]);
  const [material, setMaterial] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleEditClick = (event, types) => {
    event.preventDefault();
    setEditId(types);
  };
  const handleCancelClick = () => {
    setEditId(null);
  };

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
    <>
      <h1>Type and Material</h1>
      <div style={{ display: "flex", width: "1144px" }}>
        <div className="type-managerment">
          <AddNewType />
          <table
            class="table table-hover"
            style={{
              backgroundColor: "#fff",
              width: "512px",
              marginRight: "150px",
            }}
          >
            <thead>
              <tr>
                <th scope="col" style={{width: "100px"}}>ID</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {type.map((item, index) => (
                <Fragment>
                  {editId === item._id ? (
                    <EditableType
                      index={index}
                      item={item}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyType
                      index={index}
                      item={item}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="material-managerment">
          <AddNewMaterial />
          <table
            class="table table-hover"
            style={{ backgroundColor: "#fff", width: "512px" }}
          >
            <thead>
              <tr>
                <th scope="col" style={{width: "100px"}}>ID</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {material.map((item, index) => (
                <Fragment>
                  {editId === item._id ? (
                    <EditableMaterial
                      index={index}
                      item={item}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyMaterial
                      index={index}
                      item={item}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TypeAndMaterial;
