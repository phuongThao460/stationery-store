/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../style/SidebarMenu.css";
import { Routes, Route } from "react-router-dom";
import SidebarMenu from "../../components/SidebarMenu";
import EditAccount from "./MainProfile/EditAccount";
import EditAddress from "./MainProfile/EditAddress";
import OrderView from "./MainProfile/OrderView";
import Feedback from "./MainProfile/Feedback";
import Favorites from "./MainProfile/Favorites";
import Vouchers from "./MainProfile/Vouchers";
function Profile() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <h1 className="Title-profile">Profile</h1>
      <div style={{ display: "flex" }}>
        <SidebarMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />
        <Routes>
          <Route path="/profile/account" element={<EditAccount />} />
          <Route path="/profile/address" element={<EditAddress />} />
          <Route path="/profile/order" element={<OrderView />} />
          <Route path="/profile/feedback" element={<Feedback />} />
          <Route path="/profile/favorites" element={<Favorites />} />
          <Route path="/profile/vouchers" element={<Vouchers />} />
        </Routes>
      </div>
    </>
  );
}

export default Profile;
