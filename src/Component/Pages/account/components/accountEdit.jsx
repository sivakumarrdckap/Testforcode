import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

export default function AccountEdit() {
  const customer_details = useSelector((state) => state.customer_details);
  const [data, setData] = useState({
    fname: customer_details.firstname,
    lname: customer_details.lastname,
  });
  const [updatepass, setupdatepass] = useState(false);
  const [password, setPassword] = useState("");
  const [currentPassword, setcurrentPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const updateValue = ({ target: { name, value } }) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const updatePassword = (e) => {
    e.preventDefault();
    if (cpassword === password) {
      axios
        .put(
          process.env.REACT_APP_MAGENTO_URI +
            "customers/me/password?customerId=" +
            customer_details.id,
          {
            currentPassword,
            newPassword: password,
          },
          {
            headers: {
              Authorization:
                "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
            },
          }
        )
        .then((res) => {
          setcurrentPassword("");
          setPassword("");
          setCpassword("");
          Swal.fire("Success", "Password Updated Successfully", "success");
        })
        .catch((err) => {
          Swal.fire("Oops!", err.response.data.message, "error");
        });
    }
  };
  return (
    <Card>
      <div className="card-title">
        <h3>ACCOUNT INFORMATION</h3>
      </div>

      <div>
        <label htmlFor="fname"> First Name </label>
        <input
          id="fname"
          onChange={updateValue}
          name="fname"
          value={data.fname}
          type="text"
        />
      </div>

      <div>
        <label htmlFor="lname"> Last Name </label>
        <input
          id="lname"
          name="lname"
          onChange={updateValue}
          value={data.lname}
          type="text"
        />
      </div>

      <span className="optin-btn">
        {" "}
        <span
          onClick={() => setupdatepass((updatepass) => !updatepass)}
          className={`toggle-btn ${updatepass ? "active" : ""}`}
        ></span>{" "}
        Change Password
      </span>

      {updatepass ? (
        <div className="mt-5">
          <form onSubmit={updatePassword}>
            <div>
              <label htmlFor="fname">Current Password </label>
              <input
                value={currentPassword}
                onChange={({ target: { value } }) => setcurrentPassword(value)}
                type="password"
              />
            </div>
            <div>
              <label htmlFor="fname">New Password </label>
              <input
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
              />
            </div>

            <div>
              <label htmlFor="lname"> Confirm Password </label>
              <input
                value={cpassword}
                onChange={({ target: { value } }) => setCpassword(value)}
                type="password"
              />
            </div>
            <button onClick={updatePassword} className="mt-3 btn">
              Update Password
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </Card>
  );
}
