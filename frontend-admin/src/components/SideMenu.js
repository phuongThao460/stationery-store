/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineBarChart,
} from "react-icons/ai";
import {
  BsSearch,
  BsFillPersonLinesFill,
  BsThreeDotsVertical,
  BsPerson
} from "react-icons/bs";
import {
  RiDashboardFill,
  RiListUnordered,
  RiContactsBook2Line
} from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import logo from "../images/logo.jpg";
import cat from "../images/cat.jpg";
import MenuItem from "./MenuItem";
import { Link, useNavigate } from "react-router-dom";
const menuItems = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: <RiDashboardFill />,
    subMenus: [
      { name: "Supplier", to: "/products/supplier" },
      { name: "Type and Material", to: "/products/type-material" },
      { name: "Feedback", to: "/products/feedback" },
    ],
  },
  {
    name: "Customer",
    to: "/customer",
    exact: "true",
    icon: <BsFillPersonLinesFill />,
  },
  {
    name: "Staff",
    to: "/staff",
    exact: "true",
    icon: <BsPerson />,
  },
  { name: "Order", to: "/order", icon: <RiListUnordered /> },
  { name: "Voucher", to: "/voucher", icon: <IoTicketOutline /> },
  {
    name: "Revenue Statistics",
    to: "/statistics",
    icon: <AiOutlineBarChart />,
  },
  { name: "Contact", to: "/contact", icon: <RiContactsBook2Line /> },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);
  const info = JSON.parse(window.sessionStorage.getItem("employee-account"));
  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  const logout = () => {
    window.sessionStorage.removeItem("employee-account");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
          {inactive ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <BsSearch />
        </button>
        <input type="text" name="" id="" placeholder="Search here" />
      </div>
      <div className="divider"></div>
      <div className="main-menu">
        <ul>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              icon={item.icon}
              to={item.to}
              subMenus={item.subMenus || []}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={cat} alt="" />
        </div>
        <div className="user-info">
          <h5 style={{ marginBottom: "0" }}>{info.ten_nv}</h5>
          <p>{info.email}</p>
        </div>
        <div className="settings">
          <BsThreeDotsVertical />
          <ul className="table-content">
            <li className="list">
              <Link to="/profile" className="list-link">Profile</Link>
            </li>
            <li className="list">
              <button className="btn-logout" onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
        <div style={{ height: "20px" }} />
      </div>
    </div>
  );
};

export default SideMenu;
