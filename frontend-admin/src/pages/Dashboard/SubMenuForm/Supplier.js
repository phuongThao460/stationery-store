import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import EditableSupplier from "./EditableRow/EditableSupplier";
import ReadOnlySupplier from "./ReadOnly/ReadOnlySupplier";
import { BiPlusMedical } from "react-icons/bi";
import AddNewSupplier from "./AddNew/AddNewSupplier";
function Supplier() {
  const [supplier, setSupplier] = useState([]);
  const [editId, setEditId] = useState(null);
  const [change, setChange] = useState(false);

  const handleEditClick = (event, types) => {
    event.preventDefault();
    setEditId(types);
  };
  const handleCancelClick = () => {
    setEditId(null);
  };
  const handleCancelAdd = () => {
    setChange(false);
  }
  useEffect(() => {
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/nha_cc/")
      .then((res) => {
        setSupplier(res.data);
      });
  }, []);
  return (
    <>
      <div className="hearder">
        <h1>Suppliers</h1>
        {change ? (
          <AddNewSupplier handleCancelAdd={handleCancelAdd}/>
        ) : (
          <div className="btn">
            <button className="btn-add" onClick={() => setChange(true)}>
              <BiPlusMedical />
              <span>Add Product</span>
            </button>
          </div>
        )}
      </div>

      <table className="table table-hover" style={{ backgroundColor: "#FFF" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Tele.</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {supplier.map((item) => (
            <Fragment>
              {editId === item._id ? (
                <EditableSupplier
                  item={item}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlySupplier
                  item={item}
                  handleEditClick={handleEditClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Supplier;
