import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./cart";
import Logo from "./Components/logo";
import Menuicon from "./Components/menuIcon";
import Navigationbar from "./Components/newNavigation";
import Searchbar from "./Components/search-bar";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import User from "./Components/User";

function Headers() {
    let history = useHistory();
    const [isActive, setActive] = useState(false);
    const customer_token = useSelector((state) => state.customer_token);
    const showHideMenu = () => {
        setActive((isActive) => !isActive);
        document.documentElement.classList.toggle("nav-open");
        document.body.classList.toggle("nav-open");
        document.getElementById("mobile-nav").classList.toggle("navopen");
    };

    const changeRoute = (route) => {
        document.documentElement.classList.remove("nav-open");
        document.body.classList.remove("nav-open");
        document.getElementById("mobile-nav").classList.remove("navopen");
        history.push(route);
        setActive(false);
    };

    return (
        <header>
            <div className="header-warning-block">
                WARNING: This product contains nicotine. Nicotine is an
                addictive chemical.
            </div>
            <div className="header-middle">
                <div className="cus-container">
                    <Logo />
                    <div className="header-panel-right">
                        <ul className="right_panel_list">
                            <Searchbar />
                            {
                                customer_token ? (
                                    <Link className='search-link' to='/wishlist'>
                                        <i className="fas fa-heart"></i>
                                    </Link>
                                ):null
                            }
                            <User />
                            <Cart />
                        </ul>
                    </div>
                    <Menuicon
                        showHideMenu={showHideMenu}
                        isActive={isActive}
                        setActive={setActive}
                    />
                </div>
            </div>
            <div className="header-nav">
                <Navigationbar changeRoute={changeRoute} />
                <div
                    className="mobile-menu"
                    id="mobile-nav"
                    changeRoute={changeRoute}
                >
                    <Tabs defaultActiveKey="menu" id="uncontrolled-tab-example">
                        <Tab eventKey="menu" title="MENU">
                            <Navigationbar changeRoute={changeRoute} />
                        </Tab>
                        <Tab eventKey="account" title="ACCOUNT">
                            <div className="account-menus">
                                <ul>
                                    <li>
                                        <a href="#">My Account</a>
                                    </li>
                                    <li>
                                        <a href="#">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="#">Reward Points</a>
                                    </li>
                                    <li>
                                        <a href="#">Creat an Account</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <p>Welcome to Element Vape!</p>
                                    </li>
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className="cus-container">
                <div className="promotion">
                    <p>Shop Best Vape of 2020 | Free U.S. Shipping $75+</p>
                </div>
            </div>
        </header>
    );
}

export default React.memo(Headers);
