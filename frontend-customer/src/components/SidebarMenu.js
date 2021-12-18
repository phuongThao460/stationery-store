/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  RiDashboardFill,
  RiContactsFill,
  RiListUnordered,
} from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import MenuItems from "./MenuItems";

const SidebarMenu = (props) => {
  const cusAccountInfo = JSON.parse(
    window.localStorage.getItem("customer-account")
  );
  const menuItems = [
    {
      name: "My account",
      to: "/profile/account",
      icon: <RiDashboardFill />,
    },
    {
      name: "My address",
      to: "/profile/address",
      exact: "true",
      icon: <BsFillPersonLinesFill />,
    },
    {
      name: "Order management",
      to: "/profile/order",
      icon: <RiListUnordered />,
    },
    {
      name: "Review of purchased product",
      to: "/profile/feedback",
      icon: <AiOutlineBarChart />,
    },
    { name: "Favorites", to: "/profile/favorites", icon: <RiContactsFill /> },
    { name: "Vouchers", to: "/profile/vouchers", icon: <IoTicketOutline /> },
  ];
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (inactive) {
    }

    props.onCollapse(inactive);
  }, [inactive]);
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
  return (
    <div>
      <div className="side-menu">
        <div className="user-account-info">
          <div className="img-profile">
            <img
              src="./images/banner-1.jpg"
              alt="sale-off"
            />
          </div>
          <div className="profile-title">
            <p className="in">Account of</p>
            <b className="name-cus">{cusAccountInfo.ten_kh}</b>
          </div>
        </div>
        <div className="main-menu">
          <ul>
            {menuItems.map((item, index) => (
              <MenuItems
                key={index}
                name={item.name}
                to={item.to}
                onClick={() => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
