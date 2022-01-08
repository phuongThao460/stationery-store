import axios from "axios";
import React from "react";
import { createRef } from "react";
import { Modal } from "react-bootstrap";

function AddManualStatistics(props) {
  const staffInfo = JSON.parse(window.localStorage.getItem("employee-account"));
  const startDay = createRef();
  const endDay = createRef();

  const addNew = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/thong_ke/create", {
        ngay_bat_dau: startDay.current.value,
        ngay_ket_thuc: endDay.current.value,
        id_nv: staffInfo._id
      })
      .then(() => {
        alert("Add New Successful");
      });
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Manual Statistics
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            ID: <b> {staffInfo._id}</b>
          </div>
          <div>Start Day</div>
          <div>
            <input type="date" name="startDay" id="" ref={startDay} />
          </div>
          <div>End Day</div>
          <div>
            <input type="date" name="startDay" id="" ref={endDay} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-add" onClick={() => addNew()}>Add New</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddManualStatistics;
