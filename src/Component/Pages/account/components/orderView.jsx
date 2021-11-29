import React from "react";
import Card from "react-bootstrap/Card";

export default function Orderview() {
    return (
        <Card>
            <div className="order-details-items">
                <div className="order-title">
                    <h3>Items Ordered</h3>
                </div>
                <div className="table-wrapper order-items">
                    <table>
                        <thead>
                            <tr>
                                <th className="col name">Product Name</th>
                                <th className="col sku">SKU</th>
                                <th className="col price">Price</th>
                                <th className="col qty">Qty</th>
                                <th className="col excise">Excise Tax</th>
                                <th className="col subtotal">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col name" data-th="Product Name">
                                    <span className="product name product-item-name">Wotofo SMRT 80W Pod Kit</span>
                                    <dl className="item-options">
                                        <dt>Colors</dt>
                                        <dd>
                                            Black Red </dd>
                                    </dl>
                                </td>
                                <td className="col sku" data-th="SKU">WOT078</td>
                                <td className="col price" data-th="Price">
                                    <span className="price-excluding-tax" data-label="Excl. Tax">
                                        <span className="cart-price">
                                            <span className="price">$39.99</span> </span>
                                    </span>
                                </td>
                                <td className="col qty" data-th="Qty">
                                    <ul className="items-qty">
                                        <li className="item">
                                            <span className="title">Ordered:</span>
                                            <span className="content">1</span>
                                        </li>
                                        <li className="item">
                                            <span className="title">Refunded:</span>
                                            <span className="content">1</span>
                                        </li>
                                    </ul>
                                </td>
                                <td className="col excise" data-th="Excise Tax">
                                    <span className="price">$0.00</span> </td>
                                <td className="col subtotal" data-th="Subtotal">
                                    <span className="price-excluding-tax" data-label="Excl. Tax">
                                        <span className="cart-price">
                                            <span className="price">$39.99</span> </span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="subtotal">
                                <th colspan="4" scope="row" align="left">
                                    Subtotal : </th>
                                <td></td>
                                <td className="amount" data-th="Subtotal" align="right">
                                    <span className="price">$39.99</span> </td>
                            </tr>
                            <tr className="shipping">
                                <th colspan="4" scope="row" align="left">
                                    Shipping &amp; Handling : </th>
                                <td></td>
                                <td className="amount" data-th="Shipping &amp; Handling" align="right">
                                    <span className="price">$8.00</span> </td>
                            </tr>
                            <tr className="rewards_discount">
                                <th colspan="4" scope="row" align="left">
                                    Reward Point(s) : </th>
                                <td></td>
                                <td className="amount" data-th="Reward Point(s)" align="right">
                                    <span className="price">-$2.00</span> </td>
                            </tr>
                            <tr className="totals-tax">
                                <th colspan="4" scope="row" align="left">
                                    Sales Tax : </th>
                                <td></td>
                                <td className="amount" data-th="Sales Tax" align="right">
                                    <span className="price">$3.79</span> </td>
                            </tr>
                            <tr className="adult_signature_fee">
                                <th colspan="4" scope="row" align="left">
                                    Adult Signature Fee (Required - See FAQ Page) : </th>
                                <td></td>
                                <td className="amount" data-th="Adult Signature Fee (Required - See FAQ Page)" align="right">
                                    <span className="price">$5.00</span> </td>
                            </tr>
                            <tr className="grand_total">
                                <th colspan="4" scope="row" align="left">
                                    <strong>Grand Total :</strong>
                                </th>
                                <td></td>
                                <td className="amount" data-th="Grand Total" align="right">
                                    <strong><span className="price">$54.78</span></strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </Card>
    );
}
