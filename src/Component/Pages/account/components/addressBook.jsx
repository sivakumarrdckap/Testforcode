import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
export default function Addressbook() {
    return (
        <Card>
            <div className="card-title">
                <h3>ADDRESS BOOK</h3>
                <div className="manage-add-btn">Manage Addresses <span><FaExternalLinkAlt /> </span></div>
            </div>
            <Row>
                <Col sm={6}>
                    <h5>DEFAULT BILLING ADDRESS</h5>
                    <p>
                        You have not set a default billing
                        address.
                                    </p>
                    <div className="option">
                        <span className="optin-btn"><span><BsPencilSquare /></span>Edit Address</span>
                    </div>
                </Col>
                <Col sm={6}>
                    <h5>DEFAULT SHIPPING ADDRESS</h5>
                    <p>
                        You have not set a default shipping
                        address.
                                    </p>
                    <div className="option">
                        <span className="optin-btn"><span><BsPencilSquare /></span>Edit Address</span>
                    </div>
                </Col>
            </Row>
        </Card>
    );
}