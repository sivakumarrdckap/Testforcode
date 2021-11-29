import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function AccountInfo({ customerdetails }) {
    return (
        <Card>
            <div className="card-title">
                <h3>ACCOUNT INFORMATION</h3>
            </div>
            <Row>
                <Col sm={6}>
                    <h5>CONTACT INFORMATION</h5>
                    <p>
                        {customerdetails &&
                            customerdetails.firstname +
                                " " +
                                customerdetails.lastname}
                    </p>
                    <p>{customerdetails && customerdetails.email}</p>
                    <div className="option">
                        <span className="optin-btn">
                            <span>
                                <BsPencilSquare />
                            </span>{" "}
                            Edit
                        </span>
                        <span className="optin-btn">
                            <span>
                                <BsPencilSquare />
                            </span>
                            Change Password
                        </span>
                    </div>
                </Col>
                <Col sm={6}>
                    <h5>NEWSLETTERS</h5>
                    <p>You are subscribed to "General Subscription".</p>
                    <div className="option">
                        <span className="optin-btn">
                            <span>
                                <BsPencilSquare />
                            </span>
                            Edit
                        </span>
                    </div>
                </Col>
            </Row>
        </Card>
    );
}
