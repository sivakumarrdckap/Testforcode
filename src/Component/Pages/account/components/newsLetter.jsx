import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { TiArrowBack } from "react-icons/ti";
import { useHistory } from "react-router";
export default function NewsLetter() {
  let history = useHistory();
  const [state, setstate] = useState(false);
  return (
    <Card>
      <div className="card-title">
        <h3>SUBSCRIPTION OPTION</h3>
      </div>
      <span className="optin-btn">
        {" "}
        <span className={`toggle-btn `}></span> General Subscription
      </span>
      <div className="mt-5 newaletter-footer">
        <button className="btn">Save</button>
        <button className="btn" onClick={() => history.push("/account")}>
          <TiArrowBack />
          Back
        </button>
      </div>
    </Card>
  );
}
