import React from "react";
import { useState } from "react";

import Address from "./address";

export default function ShippingAddress({
    setShippingAddress,
    setShippingRegion,
    validateFields,
    setshippingmethod,
    shippingAddress,
}) {
    return (
        <div className="border-box">
            <h2>
                {/* <span className="mark">2</span> */}
                <span className="title">SHIPPING ADDRESS</span>
            </h2>
           
            <Address
            
                setShippingRegion={setShippingRegion}
                setdata={setShippingAddress}
                address={shippingAddress}
                setshippingmethod={setshippingmethod}
                validateFields={validateFields}
            />
        </div>
    );
}
