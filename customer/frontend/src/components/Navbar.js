import React from "react";
import "../style/Navbar.css";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import NavbarData from "../data/NavbarData";
function Navbar(props) {
  const { countCartItem } = props;
  return (
    <div className="container-1">
      <div className="navbar-1">
        <form className="header-1">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <BsSearch id="input-img" />
        </form>

        <BiUser className="user-account" />
        <div className="cart">
          <BsHandbag className="cart-bag" />
          <div className="num-item">
            <div className="text-num">{countCartItem}</div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        {NavbarData.map((item, index) => {
          return (
            <div key={index} className="sub-nav">
              <a href={item.path} className="link-page">
                {item.title}
              </a>
            </div>
          );
        })}
      </nav>
      <div className="banner">
        <img
          src="./images/banner-1.jpg"
          alt="sale-off"
          className="banner-pic"
        />
      </div>
      <div className="sub-menu">
        <div
          className="card-content-1"
          style={{
            background: `url('./images/notebook.jpg')`,
            backgroundSize: "cover",
          }}
        >
          <div className="card-cover">
            <div className="card-title">NoteBook</div>
            <div className="card-text">"Đối với mình mà nói, không có nơi nào trên thế giới này sống động hơn Bình An Kinh, đây là cố hương của mình nha~"
"Vậy thì ... Cố hương của mình là..."
Mình nhớ ra rồi, nơi đó là....</div>
          </div>
        </div>
        <div style={{ flexDirection: "column" }}>
          <div
            className="card-content-2"
            style={{
              background: `url('./images/pen.jpg')`,
              backgroundSize: "cover",
            }}
          >
            <div className="card-cover" style={{top: "72%"}}>
              <div className="card-title">Pen</div>
              <div className="card-text">"Đối với mình mà nói, không có nơi nào trên thế giới này sống động hơn Bình An Kinh, đây là cố hương của mình nha~"
"Vậy thì ... Cố hương của mình là..."
Mình nhớ ra rồi, nơi đó là....</div>
            </div>
          </div>

          <div
            className="card-content-2"
            style={{
              background: `url('./images/giftwrap.jpg')`,
              backgroundSize: "cover",
              marginTop: "9px",
            }}
          >
            <div className="card-cover" style={{top: "72%"}}>
              <div className="card-title">Gift</div>
              <div className="card-text">"Đối với mình mà nói, không có nơi nào trên thế giới này sống động hơn Bình An Kinh, đây là cố hương của mình nha~"
"Vậy thì ... Cố hương của mình là..."
Mình nhớ ra rồi, nơi đó là....</div>
            </div>
          </div>
        </div>

        <div style={{ flexDirection: "column" }}>
          <div
            className="card-content-3"
            style={{
              background: `url('./images/a.png')`,
              backgroundSize: "cover",
            }}
          >
            <div className="card-cover" style={{top: "72%"}}>
              <div className="card-title">Sketchbook</div>
              <div className="card-text">"Đối với mình mà nói, không có nơi nào trên thế giới này sống động hơn Bình An Kinh, đây là cố hương của mình nha~"
"Vậy thì ... Cố hương của mình là..."
Mình nhớ ra rồi, nơi đó là....</div>
            </div>
          </div>
          <div
            className="card-content-3"
            style={{
              background: `url('./images/aaaaaaa.jpg')`,
              backgroundSize: "cover",
              marginTop: "9px",
            }}
          >
            <div className="card-cover" style={{top: "72%"}}>
              <div className="card-title">Calendar</div>
              <div className="card-text">"Đối với mình mà nói, không có nơi nào trên thế giới này sống động hơn Bình An Kinh, đây là cố hương của mình nha~"
"Vậy thì ... Cố hương của mình là..."
Mình nhớ ra rồi, nơi đó là....</div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-space" style={{ height: "500px" }}></div>
    </div>
  );
}

export default Navbar;
