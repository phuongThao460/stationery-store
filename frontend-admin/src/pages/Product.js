import React from "react";
import { Modal } from "../components/Modal";
import { BiPlusMedical } from "react-icons/bi";
class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
  openModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div>
        <h1>React modal</h1>
        <button onClick={this.openModal} className="btn-add">
          <BiPlusMedical />
          <span style={{marginLeft: "8px"}}>Add New Color</span>
        </button>
        <Modal
          show={this.state.showModal}
          handleClose={this.hideModal}
          children={"Add new color"}
        ></Modal>
      </div>
    );
  }
}

export default Product;
