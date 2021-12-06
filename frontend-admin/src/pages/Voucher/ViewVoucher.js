import React from 'react'
import { Modal } from 'react-bootstrap'
function ViewVoucher(props) {
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
            Voucher Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div><b>Accumulation start day: </b>{new Date(props.dayStart).toLocaleDateString("en-GB")}</div>
            <div><b>Accumulation end day: </b>{new Date(props.dayEnd).toLocaleDateString("en-GB")}</div>
            <div><b>Minimum account activation days: </b>{props.minNumberDay}</div>
            <div><b>Minimun cumulative purchase total: </b>{props.minTotal}</div>
            <div><b>Percent discount: </b>{props.percent}</div>
            <div><b>Day Create: </b>{new Date(props.dayCreate).toLocaleDateString("en-GB")}</div>
            <div><b>Start date of voucher application: </b>{new Date(props.startApply).toLocaleDateString("en-GB")}</div>
            <div><b>End date of voucher application: </b>{new Date(props.endApply).toLocaleDateString("en-GB")}</div>
            <div><b>Number in used: </b>{props.inUsed}</div>
            <div><b>Amount: </b>{props.amount}</div>
            <div><b>Status: </b>{props.status}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ViewVoucher
