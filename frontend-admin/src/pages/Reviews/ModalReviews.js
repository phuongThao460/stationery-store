import React from 'react'
import { Modal, Button } from "react-bootstrap";

function ModalReviews(props) {
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
            Customer Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <table className="table-modal">
              <tr>
                <td><b>Email: </b></td>
                <td>{props.email}</td>
                
              </tr>
              <tr>
                <td style={{color: "transparent"}}>This is </td>
                <td style={{color: "transparent"}}>This is </td>
              </tr>
              <tr>
                <td style={{width: "132px", verticalAlign: "top"}}><b>Product's name: </b></td>
                <td>{props.product}</td>
              </tr>
              <tr>
                <td style={{color: "transparent"}}>This is </td>
                <td style={{color: "transparent"}}>This is </td>
              </tr>
              <tr>
                <td><b>Rating: </b></td>
                <td>{props.rating}</td>
              </tr>
              <tr>
                <td style={{color: "transparent"}}>This is </td>
                <td style={{color: "transparent"}}>This is </td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "top"}}><span><b>Comment: </b></span></td>
                <td>{props.comment}</td>
              </tr>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalReviews
