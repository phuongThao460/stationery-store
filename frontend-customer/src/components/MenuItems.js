import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItems = (props) => {
  const { name, icon, to } = props;
  const [expand, setExpand] = useState(false);
  return (
    <li onClick={props.onClick}>
      <NavLink
        onClick={() => setExpand(!expand)}
        to={to}
        className={"menu-item"}
        exact
      >
        <div className="menu-icon">{icon}</div>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};
export default MenuItems;
