import { useState } from 'react'
import "../style/Modal.css"
import { AiOutlineClose } from 'react-icons/ai'
const ColorPicker = props => {
  return (
    <div className="color-picker">
      <input type="color" {...props} />
      <input type="text" {...props} />
    </div>
  );
};

export default function Color() {
  const [state, updateState] = useState("#FFFFFF");

  const handleInput = e => {
    updateState(e.target.value);
  };

  return (
    <div className="color">
      <ColorPicker onChange={handleInput} value={state} />
    </div>
  );
}
export const ModalColor = ({ show, children, handleClose }) => {
  return (
    <>
      {show ? (
        <div className="modal display-block">
          <section className="modal-main">
            <div className="modal-top">
              <h3>{children}</h3>
              
              <button type="button" onClick={handleClose} style={{backgroundColor: "transparent", outline:"none", border: "0"}}>
                <AiOutlineClose/>
              </button>
            </div>

            <div
              className="row align-items-center"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "35px",
                paddingTop: "19px"
              }}
            >
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">
                  Color
                </label>
              </div>
              <div className="col-auto">
                <Color />
              </div>
              <div className="col-auto">
                <button style={{backgroundColor: "blue", outline:"none", border: "0", color: "white", borderRadius: "5px", padding: "5px 10px"}}>Submit</button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};

export const ModalMaterial = ({ show, children, handleClose }) => {
  return (
    <>
      {show ? (
        <div className="modal display-block">
          <section className="modal-main">
            <div className="modal-top">
              <h3>{children}</h3>
              
              <button type="button" onClick={handleClose} style={{backgroundColor: "transparent", outline:"none", border: "0"}}>
                <AiOutlineClose/>
              </button>
            </div>

            <div
              className="row align-items-center"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "35px",
                paddingTop: "19px"
              }}
            >
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">
                  Color
                </label>
              </div>
              <div className="col-auto">
                <Color />
              </div>
              <div className="col-auto">
                <button style={{backgroundColor: "blue", outline:"none", border: "0", color: "white", borderRadius: "5px", padding: "5px 10px"}}>Submit</button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
export const ModalType = ({ show, children, handleClose }) => {
  return (
    <>
      {show ? (
        <div className="modal display-block">
          <section className="modal-main">
            <div className="modal-top">
              <h3>{children}</h3>
              
              <button type="button" onClick={handleClose} style={{backgroundColor: "transparent", outline:"none", border: "0"}}>
                <AiOutlineClose/>
              </button>
            </div>

            <div
              className="row align-items-center"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "35px",
                paddingTop: "19px"
              }}
            >
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">
                  Color
                </label>
              </div>
              <div className="col-auto">
                <Color />
              </div>
              <div className="col-auto">
                <button style={{backgroundColor: "blue", outline:"none", border: "0", color: "white", borderRadius: "5px", padding: "5px 10px"}}>Submit</button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
export const ModalSupplier = ({ show, children, handleClose }) => {
  return (
    <>
      {show ? (
        <div className="modal display-block">
          <section className="modal-main">
            <div className="modal-top">
              <h3>{children}</h3>
              
              <button type="button" onClick={handleClose} style={{backgroundColor: "transparent", outline:"none", border: "0"}}>
                <AiOutlineClose/>
              </button>
            </div>

            <div
              className="row align-items-center"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "35px",
                paddingTop: "19px"
              }}
            >
              <div className="col-auto">
                <label for="inputPassword6" className="col-form-label">
                  Color
                </label>
              </div>
              <div className="col-auto">
                <Color />
              </div>
              <div className="col-auto">
                <button style={{backgroundColor: "blue", outline:"none", border: "0", color: "white", borderRadius: "5px", padding: "5px 10px"}}>Submit</button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
export const ModalProduct = ({ show, children, handleClose }) => {
  return (
    <>
      {show ? (
        <div className="modal display-block">
          <section className="modal-main" style={{width: "62%", height:"90%"}}>
            <div className="modal-top">
              <h3>Product Detail</h3>
              <button type="button" onClick={handleClose} style={{backgroundColor: "transparent", outline:"none", border: "0"}}>
                <AiOutlineClose/>
              </button>
            </div>

            <div>{children}</div>
          </section>
        </div>
      ) : null}
    </>
  );
}