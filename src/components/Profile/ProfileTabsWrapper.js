import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import AccountInfo from "./AccountInfo";
import AccountAddress from "./AccountAddress";
import Wishlist from "./Wishlist";
import AccountOrders from "./AccountOrders";
import ChangePassword from "./ChangePassword";

import "./tabsWrapper.scss";

export default function ProfileTabsWrapper() {

	let { tab } = useParams();

  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect( () => {

    if( tab ) {
      if( tab === 'address' ) setActiveTab(1)
      if( tab === 'wishlist' ) setActiveTab(2)
      if( tab === 'orders' ) setActiveTab(3)
    }

  }, [])

  return (
    <div className="container acc-tabs-wrapper">
      <div className="row">
          <div className="tabs">

            <div
              className={`tab ${activeTab === 0 ? "active" : ""}`}
              onClick={() => changeActiveTab(0)}
              to="/profile"
            >
              Info
            </div>

            <Link
              className={`tab ${activeTab === 1 ? "active" : ""}`}
              onClick={() => changeActiveTab(1)}
              to="/profile/address"
            >
              Address
            </Link>

            <Link
              className={`tab ${activeTab === 2 ? "active" : ""}`}
              onClick={() => changeActiveTab(2)}
              to="/profile/wishlist"
            >
              WishList
            </Link>

            <Link
              className={`tab ${activeTab === 3 ? "active" : ""}`}
              onClick={() => changeActiveTab(3)}
              to="/profile/orders"
            >
              Orders
            </Link>

            <Link
              className={`tab ${activeTab === 4 ? "active" : ""}`}
              onClick={() => changeActiveTab(4)}
              to="/profile/changepass"
            >
              Change Password
            </Link>

          </div>

          <div className="active-tab-wrapper">

            {activeTab === 0 && <AccountInfo />}

            {activeTab === 1 && <AccountAddress />}

            {activeTab === 2 && <Wishlist />}

            {activeTab === 3 && <AccountOrders />}

            {activeTab === 4 && <ChangePassword />}

          </div>

        </div>
      </div>
  );
}
