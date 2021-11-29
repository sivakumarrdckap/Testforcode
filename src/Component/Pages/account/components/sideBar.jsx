import React from "react";
import { useHistory } from "react-router-dom";
import Menuicon from "../../../Common/Headers/Components/menuIcon";

export default function SideBar({ showHideMenu, isActive, setActive, path }) {
  const history = useHistory();
  return (
    <>
      <Menuicon
        showHideMenu={showHideMenu}
        isActive={isActive}
        setActive={setActive}
      />
      <ul className="account-nav">
        <li
          onClick={() => history.push("/account")}
          className={path === "/account" ? "active" : ""}
        >
          My Account
        </li>
        <li
          className={path === "/sales/order/history" ? "active" : ""}
          onClick={() => history.push("/sales/order/history")}
        >
          My Orders
        </li>

        <li
          className={path === "/wishlist" ? "active" : ""}
          onClick={() => history.push("/wishlist")}
        >
          My Wish List
        </li>
        <li
          className={path === "/customer/address" ? "active" : ""}
          onClick={() => history.push("/customer/address")}
        >
          Address Book
        </li>
        <li
          className={path === "/account/edit" ? "active" : ""}
          onClick={() => history.push("/account/edit")}
        >
          Account Information
        </li>
        <li
          className={path === "/gdpr/customer/settings" ? "active" : ""}
          onClick={() => history.push("/gdpr/customer/settings")}
        >
          Privacy Settings
        </li>
        <li
          className={path === "/newsletter/manage" ? "active" : ""}
          onClick={() => history.push("/newsletter/manage")}
        >
          Newsletter Subscriptions
        </li>
        <li
          className={path === "/amstorecredit" ? "active" : ""}
          onClick={() => history.push("/amstorecredit")}
        >
          Store Credit & Refunds
        </li>
        <li
          className={path === "/rewards/account" ? "active" : ""}
          onClick={() => history.push("/rewards/account")}
        >
          My Reward Points
        </li>
      </ul>
    </>
  );
}
