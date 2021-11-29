import React, { useState } from "react";
export default function Menuicon({ showHideMenu, isActive }) {
    return (
        <div className="menu-icon">
            <a onClick={showHideMenu} className={isActive && "close-menu"}>
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </a>
        </div>
    );
}
