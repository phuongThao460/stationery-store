import React from "react";
import { Modal, Button } from "react-bootstrap";
function StaffView(props) {
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
            Staff Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <tr>
              <td>ID</td>
              <td style={{paddingLeft: "10px"}}><b>{props.header}</b></td>
            </tr>
            <tr>
              <td>Full Name </td>
              <td style={{paddingLeft: "10px"}}>{props.role} / <b>{props.name}</b></td>
            </tr>
            <tr>
              <td>Email</td>
              <td style={{paddingLeft: "10px"}}><b>{props.email}</b></td>
            </tr>
            <tr>
              <td>Tel</td>
              <td style={{paddingLeft: "10px"}}><b>{props.phone}</b></td>
            </tr>
            <tr>
              <td>Sexual</td>
              <td style={{paddingLeft: "10px"}}><b>{props.sexual}</b></td>
            </tr>
            <tr>
              <td>Address</td>
              <td style={{paddingLeft: "10px"}}><b>{props.streetnumber}</b></td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StaffView;
