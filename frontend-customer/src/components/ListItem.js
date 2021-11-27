import React from "react";
//import { useParams } from 'react-router';
//import { Link } from "react-router-dom";
import "../style/ListItem.css";
function ListItem() {
  return (
    <div className="container">
      <h1>{window.localStorage.getItem("itemTitle")}</h1>
      <div className="container-body">
        <div className="sidemenu">
          <h3 className="title-list">Categories</h3>
          <ul className="sidebar-title">
            <li className="sidebar-name">Notebook</li>
            <li className="sidebar-name">Pen - Pencil</li>
            <li className="sidebar-name">Shetchnote</li>
            <li className="sidebar-name">Book - Eraser - Ruler</li>
            <li className="sidebar-name">Souvenir</li>
            <li className="sidebar-name">Color - Paint Brush</li>
            <li className="sidebar-name">Paper - Paper Clips</li>
            <li className="sidebar-name">Pen Box</li>
            <li className="sidebar-name">Other</li>
          </ul>
          <h3 className="title-list">Material</h3>
          <ul className="sidebar-title">
            <li className="sidebar-name"><input type="checkbox"/><span>Kraft Paper</span></li>
            <li className="sidebar-name"><input type="checkbox"/><span>Duplex Paper</span></li>
            <li className="sidebar-name"><input type="checkbox"/><span>Couche Paper</span></li>
            <li className="sidebar-name"><input type="checkbox"/><span>Fort Paper</span></li>
          </ul>
          <h3 className="title-list">Suplier</h3>
          <ul className="sidebar-title">
            <li className="sidebar-name"><input type="checkbox"/><span>Thien Long</span></li>
            <li className="sidebar-name"><input type="checkbox"/><span>Hoang Ha</span></li>
            <li className="sidebar-name"><input type="checkbox"/><span>An Thien Phuoc</span></li>
            <li className="sidebar-name"><input type="checkbox"/><span>An Loc Viet</span></li>
          </ul>
        </div>
        
        <div className="card-container-1">
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
