import { useState } from "react";
import "../style/Modal.css";
import { AiOutlineClose } from "react-icons/ai";
const ColorPicker = (props) => {
  return (
    <div className="color-picker">
      <input type="color" {...props} />
      <input type="text" {...props} />
    </div>
  );
};
const styleButton = {
  backgroundColor: "blue",
  outline: "none",
  border: "0",
  color: "white",
  borderRadius: "5px",
  padding: "5px 10px",
};
const styleRow = {
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "35px",
  paddingTop: "19px",
}
export const ModalColor = ({ show, children, handleClose, setColor }) => {
  const [state, updateState] = useState("#FFFFFF");

  const handleInput = (e) => {
    updateState(e.target.value);
  };
  return (
    <>
      {show ? (
        <div className="modal display-block">
          <section className="modal-main">
            <div className="modal-top">
              <h3>{children}</h3>

              <button
                type="button"
                onClick={handleClose}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "0",
                }}
              >
                <AiOutlineClose />
              </button>
            </div>

            <div
              className="row align-items-center"
              style={styleRow}
            >
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">
                  Color
                </label>
              </div>
              <div className="col-auto">
                <div className="color">
                  {/* <ColorPicker onChange={handleInput} value={state} /> */}
                  <input type="color" onChange={handleInput} value={state}/>
                </div>
              </div>
              <div className="col-auto">
                <button
                  style={styleButton}
                  onClick={setColor}
                >
                  Submit
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};
