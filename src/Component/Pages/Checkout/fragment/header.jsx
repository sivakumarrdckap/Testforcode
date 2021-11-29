import React from "react";
import { useHistory } from "react-router-dom";

export default function CheckoutHeader() {

    const history = useHistory();
    return (
        <div className="header-checkout-block">
            {/* <p>DEMO FOR HEADLESS COMMERCE</p> */}
            <img
                src="https://staging.elementvape.com/pub/media/logo/stores/1/logo_ev_02.png"
                alt=""
                srcset=""
                onClick={() => history.push("/")}
            />
            {/* <div className="cus-container">
                <p className="offer">
                    15% Off E-Liquids - Code: WEEKEND | Final Hours.
                </p>
            </div> */}
        </div>
    );
}
