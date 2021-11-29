import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import { useEffect } from "react";

export default function VerificationLevelOne({ setDobInfo }) {
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [date, setDate] = useState(null);

    let yearList = [];
    for (let i = new Date().getFullYear() - 21; i > 1922; i--) {
        yearList.push(i);
    }
    let monthList = Array.from({ length: 12 }, (_, index) => index + 1);
    let datelist =
        year && month
            ? Array.from(
                  { length: new Date(year, month, 0).getDate() },
                  (_, index) => index + 1
              )
            : [];

    useEffect(() => {
        if (year) {
            if (month) {
                setDobInfo({
                    age: new Date().getFullYear() - year,
                    dob:
                        year.toString() + "-" +
                        month.toString() + "-" +
                        date.toString(),
                });
            }
        }
    }, [date]);
    const numberConversion = (intiger) => {
        return intiger.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
    };
    return (
        <div className="verification-level-1">
            <p>
                Unfortunately, Element Vape was unable to verify your age using
                the information provided. You must be of legal smoking age (21
                and over in the U.S.) to purchase.
            </p>
            <p>
                To increase your chances of being verified, please provide
                accurate details of the following and try again:
            </p>
            <ul>
                <li> - Full Name (do not use nicknames)</li>
                <li> - Correct Billing/Shipping Address</li>
                <li> - Date of Birth</li>
                <li> - Last 4 Digits of your SSN</li>
            </ul>
            <p>All information in kept private</p>
            <Row>
                <Col sm={4} lg={4} md={4} xl={4} xs={4}>
                    <div className="input-field">
                        <label>Birth year</label>
                        <select
                            onChange={({ target: { value } }) => setYear(value)}
                            name="year"
                            className="form-control "
                        >
                            <option value="" selected disabled>
                                YYYY
                            </option>
                            {yearList.map((val) => {
                                return <option value={val}>{val}</option>;
                            })}
                        </select>
                    </div>
                </Col>
                <Col sm={4} lg={4} md={4} xl={4} xs={4}>
                    <div className="input-field">
                        <label for="month">Birth month</label>
                        <select
                            onChange={({ target: { value } }) =>
                                setMonth(numberConversion(value))
                            }
                            name="month"
                            id="month"
                            className="form-control dob"
                        >
                            <option value="MM">MM</option>
                            {monthList.map((val) => {
                                return (
                                    <option value={numberConversion(val)}>
                                        {numberConversion(val)}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </Col>
                <Col sm={4} lg={4} md={4} xl={4} xs={4}>
                    <div className="input-field">
                        <label for="day">Birth date</label>
                        <select
                            onChange={({ target: { value } }) =>
                                setDate(numberConversion(value))
                            }
                            name="day"
                            id="day"
                            className="form-control"
                        >
                            <option value="DD">DD</option>
                            {datelist.map((val) => {
                                return (
                                    <option value={numberConversion(val)}>
                                        {numberConversion(val)}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </Col>
            </Row>
            <div className="input-field">
                <label htmlFor="email">SSN</label>
                <input
                    onChange={({ target: { value } }) =>
                        setDobInfo((dob) => ({ ...dob, ssn: value }))
                    }
                    name="SSN"
                    type="text"
                    maxlength="4"
                />
            </div>
        </div>
    );
}
