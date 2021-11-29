import React from "react";

export default function Orderinfoblock() {
    return (
        <div>
            <div className="box box-order-shipping-address">
                <strong className="box-title"><span>Shipping Address</span></strong>
                <div className="box-content">
                    <address>Tommy Sy<br />
                        10620 Hickson St.,<br />
                            El Monte, California, 91731<br />
                                United States<br />
                                    T: 9524458266
                    </address>
                </div>
            </div>
            <div className="box box-order-shipping-method">
                <strong className="box-title">
                    <span>Shipping Method</span>
                </strong>
                <div className="box-content">
                    Standard Shipping (3-8 business days) - Priority Mail </div>
            </div>
            <div className="box box-order-billing-address">
                <strong className="box-title"><span>Billing Address</span></strong>
                <div className="box-content">
                    <address>Tommy Sy<br />
                        10620 Hickson St.,<br />
                            El Monte, California, 91731<br />
                                United States<br />
                                    T: 9524458266
                    </address>
                </div>
            </div>
            <div className="box box-order-billing-method">
                <strong className="box-title">
                    <span>Payment Method</span>
                </strong>
                <div className="box-content">
                    <div className="payment-method">
                        <div className="title">Debit / Credit Card</div>
                        <div className="content">
                            <table className="data table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Credit Card Type</th>
                                        <td>
                                            Visa </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Credit Card Number</th>
                                        <td>
                                            XXXX-7283 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
