import React from "react";

export default function Pagenation() {
    return (
        <div className="pager">
            <p className="toolbar-amount">
                <span className="toolbar-number">
                    Items 1 to 10 of 21 total </span>
            </p>
            <div className="pages">
                <strong className="label pages-label">Page</strong>
                <ul className="items pages-items">
                    <li className="item current">
                        <strong className="page">
                            <span>1</span>
                        </strong>
                    </li>
                    <li className="item">
                        <a href="#" className="page">
                            <span>2</span>
                        </a>
                    </li>
                    <li className="item">
                        <a href="#" className="page">
                            <span>3</span>
                        </a>
                    </li>
                    <li className="item pages-item-next">
                        <a className="action  next" href="#">
                            <span>Next</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="limiter">
                <strong className="limiter-label">Show</strong>
                <select id="limiter" className="limiter-options">
                    <option value="#" selected="selected">
                        10 </option>
                </select>
                <span className="limiter-text">per page</span>
            </div>
        </div>
    )
};