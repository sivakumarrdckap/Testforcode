import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { BsPencilSquare } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Pagenation from "./pagenation";

export default function Customeraddressbook() {
    return (
        <>
            <div className="address-book-wrap">
                <Card>
                    <div className="card-title">
                        <h3>DEFAULT ADDRESSES</h3>
                    </div>
                    <Row>
                        <Col sm={6}>
                            <h5>DEFAULT BILLING ADDRESS</h5>
                            <p>You have not set a default billing address.</p>
                            <div className="option">
                                <span className="optin-btn">
                                    <span>
                                        <BsPencilSquare />
                                    </span>
                                    CHANGE BILLING ADDRESS
                                </span>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <h5>DEFAULT SHIPPING ADDRESS</h5>
                            <p>You have not set a default shipping address.</p>
                            <div className="option">
                                <span className="optin-btn">
                                    <span>
                                        <BsPencilSquare />
                                    </span>{" "}
                                    CHANGE SHIPPING ADDRESS
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div className="additional-entries">
                <Card>
                    <div className="card-title">
                        <h3>ADDITIONAL ADDRESS ENTRIES</h3>
                    </div>
                    <div className="address-entries-table">
                        <table className="data table table-additional-addresses-items history">
                            <thead>
                                <tr>
                                    <th className="col firstname">
                                        First Name
                                    </th>
                                    <th className="col lastname">Last Name</th>
                                    <th className="col streetaddress">
                                        Street Address
                                    </th>
                                    <th className="col city">City</th>
                                    <th className="col country">Country</th>
                                    <th className="col state">State</th>
                                    <th className="col zip">Zip/Postal Code</th>
                                    <th className="col phone">Phone</th>
                                    <th className="col actions"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        data-th="First Name"
                                        className="col firstname"
                                    >
                                        tharini
                                    </td>
                                    <td
                                        data-th="Last Name"
                                        className="col lastname"
                                    >
                                        sps
                                    </td>
                                    <td
                                        data-th="Street Address"
                                        className="col streetaddress"
                                    >
                                        10620 Hickson St.,
                                    </td>
                                    <td data-th="City" className="col city">
                                        El Monte
                                    </td>
                                    <td
                                        data-th="Country"
                                        className="col country"
                                    >
                                        United States
                                    </td>
                                    <td data-th="State" className="col state">
                                        Colorado
                                    </td>
                                    <td
                                        data-th="Zip/Postal Code"
                                        className="col zip"
                                    >
                                        80202
                                    </td>
                                    <td data-th="Phone" className="col phone">
                                        9524458266
                                    </td>
                                    <td
                                        data-th="Actions"
                                        className="col actions"
                                    >
                                        <a className="action edit" href="#">
                                            Edit
                                        </a>
                                        <a className="action delete" href="#">
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        data-th="First Name"
                                        className="col firstname"
                                    >
                                        tharini
                                    </td>
                                    <td
                                        data-th="Last Name"
                                        className="col lastname"
                                    >
                                        sps
                                    </td>
                                    <td
                                        data-th="Street Address"
                                        className="col streetaddress"
                                    >
                                        9122 Ralph st,
                                    </td>
                                    <td data-th="City" className="col city">
                                        Rosemead
                                    </td>
                                    <td
                                        data-th="Country"
                                        className="col country"
                                    >
                                        United States
                                    </td>
                                    <td data-th="State" className="col state">
                                        California
                                    </td>
                                    <td
                                        data-th="Zip/Postal Code"
                                        className="col zip"
                                    >
                                        91770
                                    </td>
                                    <td data-th="Phone" className="col phone">
                                        9524458266
                                    </td>
                                    <td
                                        data-th="Actions"
                                        className="col actions"
                                    >
                                        <a className="action edit" href="#">
                                            Edit
                                        </a>
                                        <a className="action delete" href="#">
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagenation />
                </Card>
            </div>
            <div className="address-add">
                <a href="#">Add New Address</a>
            </div>
        </>
    );
}
