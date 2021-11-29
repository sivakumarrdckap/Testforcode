import React from "react";

export default function Title({ path }) {
  return path === "/account" ? (
    <h1>My Account</h1>
  ) : path === "/wishlist" ? (
    <h1>Wishlist</h1>
  ) : path === "/customer/address" ? (
    <h1>Address Book</h1>
  ) : path === "/account/edit" ? (
    <h1>Account Information</h1>
  ) : path === "/gdpr/customer/settings" ? (
    <h1>Privacy Settings</h1>
  ) : path === "/newsletter/manage" ? (
    <h1>Newsletter Subscriptions</h1>
  ) : path === "/amstorecredit" ? (
    <h1>Store Credit & Refunds</h1>
  ) : path === "/rewards/account" ? (
    <h1>My Reward Points</h1>
  ) : (
    <h1>My Orders</h1>
  );
}
