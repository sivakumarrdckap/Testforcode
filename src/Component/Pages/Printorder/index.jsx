import React from "react";
import Logo from "../../Common/Headers/Components/logo";
import Orderview from "../account/components/orderView";
import Card from "react-bootstrap/Card";
import Orderinfoblock from "../account/components/orderInfoBlock";

export default function Print() {
    return (
        <>
        <div className="container account">
            <Logo />
            <Orderview />
            <Card className="order-info">
                <div className="card-title">
                    <h3>ORDER INFORMATION</h3>
                </div>
                <Orderinfoblock />
            </Card>
        </div>
        </>
    );
}