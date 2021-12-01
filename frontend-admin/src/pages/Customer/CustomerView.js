import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
function CustomerView(props) {
  const [address, setAdress] = useState("");
  const getAddressCustomer = async () => {
    const data = await axios.post("http://localhost:8000/ttkh/getAddress", {
      _id: props.street,
    });
    setAdress(data.data);
  };
  useEffect(() => {
    getAddressCustomer();
  });
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Customer Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>ID: {props.header}</div>
            <div>Customer's Name: {props.name}</div>
            <div>Email: {props.email}</div>
            <div>Phone Number: {props.phone}</div>
            <div>Sexual: {props.sexual}</div>
            <div>
              Address: {props.streetnumber + ", "} {address}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomerView;
