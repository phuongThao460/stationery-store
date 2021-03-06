/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsSearch, BsPencilFill } from "react-icons/bs";
import { RiDashboardFill, RiContactsFill } from "react-icons/ri";
import { SiContentful } from "react-icons/si";
import logo from "../images/logo.jpg";
import cat from "../images/cat.jpg";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    name: "Products",
    to: "/",
    icon: <RiDashboardFill />,
    subMenus: [
      { name: "Supplier", to: "/products/supplier" },
      { name: "Type of Product", to: "/products/types" },
      { name: "Color of Product", to: "/products/color" },
      { name: "Material of Product", to: "/products/material" },
      { name: "Feedback", to: "/products/feedback" },
    ],
  },
  {
    name: "Content",
    to: "/content",
    exact: "true",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Music", to: "/content/music" },
    ],
    icon: <SiContentful />,
  },
  { name: "About Us", to: "/about", icon: <BsPencilFill /> },
  { name: "Contact", to: "/contact", icon: <RiContactsFill /> },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

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
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
          {inactive ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
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
          <h5>Sen Hasegaki</h5>
          <p>sennekomi@yonna.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
