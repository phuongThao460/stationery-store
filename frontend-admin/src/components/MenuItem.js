/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MenuItem = (props) => {
  const { name, subMenus, icon, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);
  return (
    <li onClick={props.onClick}>
      <NavLink
        onClick={() => setExpand(!expand)}
        to={to}
        className={`menu-item`}
      >
        <div className="menu-icon">{icon}</div>
        <span>{name}</span>
        <div className="sub-menu-icon">
          {subMenus && subMenus.length > 0 ? (
            !expand ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowUp />
            )
          ) : null}
        </div>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};
export default MenuItem;
