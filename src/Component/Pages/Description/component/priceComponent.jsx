import React from "react";

export default function PriceComponent({ price }) {
    return (
        <div className="price-container">
            <span className="special-price">${price}</span>
            {/* <span className="old-price">$69.99</span> */}
        </div>
    );
}
