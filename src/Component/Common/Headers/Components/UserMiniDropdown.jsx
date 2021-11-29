import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    update_customer_details,
    update_customer_email,
    update_customer_token,
    updateCart,
    displayUser,
    update_customer_cart_id,
    update_new_checkout_Address
} from "../../../../redux/actions";

export default function UserMiniDropdown() {
    const dispatch = useDispatch();
    const customer_details = useSelector((state) => state.customer_details);

    const logOut = () => {
        dispatch(update_customer_token(""));
        dispatch(update_customer_email(""));
        dispatch(update_customer_details({}));
        dispatch(updateCart([]));
        dispatch(displayUser(false));
        dispatch(update_customer_cart_id(''));
        dispatch(update_new_checkout_Address(''));
        localStorage.setItem("LoginTimeStamp", null);
    };

    return (
        <div className="userMiniDropdown">
            <div className="userMiniDropdown-avatar">
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="userMiniDropdown-middle">
                <Link
                    to="/account"
                    className="userMiniDropdown-middle-link-1"
                    onClick={() => dispatch(displayUser(false))}
                >
                    HI, {customer_details?.firstname}
                </Link>
                <Link
                    to="/customer/account/logoutSuccess/"
                    className="userMiniDropdown-middle-link-2"
                    onClick={logOut}
                >
                    Sign Out
                </Link>
            </div>
            <ul className="userMiniDropdown-bottom">
                <Link
                    to="/wishlist"
                    className="userMiniDropdown-bottom-link"
                    onClick={() => dispatch(displayUser(false))}
                >
                    <i className="far fa-heart"></i>
                    <span>Wishlist</span>
                </Link>
                <Link
                    to="/sales/order/history"
                    className="userMiniDropdown-bottom-link"
                    onClick={() => dispatch(displayUser(false))}
                >
                    <i className="far fa-credit-card"></i>
                    <span>My Orders</span>
                </Link>
                <Link
                    to="/account"
                    className="userMiniDropdown-bottom-link"
                    onClick={() => dispatch(displayUser(false))}
                >
                    <i className="far fa-envelope"></i>
                    <span>Contact Us</span>
                </Link>
            </ul>
        </div>
    );
}

//TODO:
//Contact Us Redirection
