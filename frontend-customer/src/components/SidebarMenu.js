import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiDashboardFill, RiContactsFill, RiListUnordered } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
function Profile() {
  const menuItems = [
    {
      name: "My account",
      to: "/",
      icon: <RiDashboardFill />,
    },
    {
      name: "My address",
      to: "/customer",
      exact: "true",
      icon: <BsFillPersonLinesFill />,
    },
    { name: "Order management", to: "/order", icon: <RiListUnordered /> },
    { name: "Review of purchased product", to: "/statistics", icon: <AiOutlineBarChart /> },
    { name: "Favorites", to: "/contact", icon: <RiContactsFill /> },
    { name: "Vouchers", to: "/voucher", icon: <IoTicketOutline /> },
  ];
  return (
    <>
      <h1>Profile</h1>
      <main>
        <div className="sidebar">
          <div className="user-account-info">
            <div className="img-profile"></div>
            <div className="profile-title">
              <p className="in">Account of</p>
              <b className="name-cus">Nguyen Hoang Kha</b>
            </div>
          </div>
          <ul className="sidebar-title">
            <li style={{backgroundColor: "#ccc"}}>My account</li>
            <li>My address</li>
            <li>Order management</li>
            <li>Review of purchased product</li>
            <li>Favorites</li>
            <li>Vouchers</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Profile;
