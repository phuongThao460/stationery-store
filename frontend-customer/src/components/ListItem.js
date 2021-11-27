import React from "react";
//import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import "../style/ListItem.css";
function ListItem() {
  return (
    <div className="container">
      <h1>{window.localStorage.getItem("itemTitle")}</h1>
      <div className="container-body">
        <div className="sidemenu">
          <h3 className="title-list">Categories</h3>
          <ul>
            <li>Notebook</li>
            <li>Pen - Pencil</li>
            <li>Shetchnote</li>
            <li>Book - Eraser - Ruler</li>
            <li>Souvenir</li>
            <li>Color - Paint Brush</li>
            <li>Paper - Paper Clips</li>
            <li>Pen Box</li>
            <li>Other</li>
          </ul>
          <h3 className="title-list">Material</h3>
          <ul>
            <li><input type="checkbox"/><span>Kraft Paper</span></li>
            <li><input type="checkbox"/><span>Duplex Paper</span></li>
            <li><input type="checkbox"/><span>Couche Paper</span></li>
            <li><input type="checkbox"/><span>Fort Paper</span></li>
          </ul>
          <h3 className="title-list">Suplier</h3>
          <ul>
            <li><input type="checkbox"/><span>Thien Long</span></li>
            <li><input type="checkbox"/><span>Hoang Ha</span></li>
            <li><input type="checkbox"/><span>An Thien Phuoc</span></li>
            <li><input type="checkbox"/><span>An Loc Viet</span></li>
          </ul>
        </div>
        
        <div className="card-container">
          <div className="card">
            <div className="card-img">
              <a href={"/products/"}>
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </a>
            </div>
            <a href={"/products/"}>
              <div className="card-body">
                <div className="body-title">Name</div>
                <div className="body-price">$ 3000</div>
              </div>
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <a href={"/products/"}>
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </a>
            </div>
            <a href={"/products/"}>
              <div className="card-body">
                <div className="body-title">Name</div>
                <div className="body-price">$ 3000</div>
              </div>
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <a href={"/products/"}>
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </a>
            </div>
            <a href={"/products/"}>
              <div className="card-body">
                <div className="body-title">Name</div>
                <div className="body-price">$ 3000</div>
              </div>
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <a href={"/products/"}>
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </a>
            </div>
            <a href={"/products/"}>
              <div className="card-body">
                <div className="body-title">Name</div>
                <div className="body-price">$ 3000</div>
              </div>
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <a href={"/products/"}>
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </a>
            </div>
            <a href={"/products/"}>
              <div className="card-body">
                <div className="body-title">Name</div>
                <div className="body-price">$ 3000</div>
              </div>
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <a href={"/products/"}>
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </a>
            </div>
            <a href={"/products/"}>
              <div className="card-body">
                <div className="body-title">Name</div>
                <div className="body-price">$ 3000</div>
              </div>
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <a href={"/products/"}>
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </a>
            </div>
            <a href={"/products/"}>
              <div className="card-body">
                <div className="body-title">Name</div>
                <div className="body-price">$ 3000</div>
              </div>
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <a href={"/products/"}>
                <img
                  src="./images/BUT- BI.jpg"
                  alt=""
                  style={{ width: "204px", height: "185px" }}
                />
              </a>
            </div>
            <a href={"/products/"}>
              <div className="card-body">
                <div className="body-title">Name</div>
                <div className="body-price">$ 3000</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
