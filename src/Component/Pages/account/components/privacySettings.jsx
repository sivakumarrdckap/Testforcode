import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PrivacySettings() {
  const [password, setpassword] = useState("");
  const [password1, setpassword1] = useState("");
  const customer_details = useSelector((state) => state.customer_details);
  const [deleteacccheckbox, setDeleteacccheckbox] = useState(false);

  const downloadUserData = (e) => {
    e.preventDefault();
    if (password) {
      axios
        .post(
          process.env.REACT_APP_MAGENTO_URI + "privacy_setting/download/",
          { customer_id: customer_details.id, password },
          {
            headers: {
              Authorization:
                "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
            },
          }
        )
        .then((res) => console.log(JSON.parse(res.data)))
        .catch((err) => console.log(err));
    }
  };

  const deleteAccount = (e) => {
    e.preventDefault();
    if (password1) {
      axios
        .post(
          process.env.REACT_APP_MAGENTO_URI + "privacy_setting/delete_request/",
          { customer_id: customer_details.id, password: password1 },
          {
            headers: {
              Authorization:
                "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
            },
          }
        )
        .then((res) => console.log(JSON.parse(res.data)))
        .catch((err) => console.log(err));
    }
  };

  const deleteAccCheckBoxFunc = () => {
    setDeleteacccheckbox((deleteacccheckbox) => !deleteacccheckbox);
  };
  return (
    <>
      <Card className="privacy-Settings">
        <div className="card-title">
          <h3>DOWNLOAD PERSONAL DATA </h3>
          <small>
            Here you can download a copy of your personal data which we store
            for your account in CSV format.
          </small>
        </div>
        <form onSubmit={downloadUserData}>
          <div>
            <label htmlFor="password"> Current Password * </label>
            <input
              type="password"
              value={password}
              required={true}
              onChange={({ target: { value } }) => setpassword(value)}
              id="password"
            />
          </div>
          <button type="submit">Download</button>
        </form>
      </Card>
      <Card className="privacy-Settings">
        <div className="card-title">
          <h3>DELETE ACCOUNT </h3>
          <small>
            Request to remove your account, together with all your personal
            data, will be processed by our staff. <br /> Deleting your account
            will remove all the purchase history, discounts, orders, invoices
            and all other information that might be related to your account or
            your purchases. <br /> All your orders and similar information will
            be lost. <br /> You will not be able to restore access to your
            account after we approve your removal request.
          </small>
        </div>
        <span>
          <input
            checked={deleteacccheckbox}
            type="checkbox"
            name="agree"
            id="agree"
            onClick={deleteAccCheckBoxFunc}
          />
          <span onClick={deleteAccCheckBoxFunc} className="ml-3">
            I understand and I want to delete my account
          </span>
          {deleteacccheckbox ? (
            <form onSubmit={deleteAccount}>
              <div>
                <label htmlFor="password"> Current Password * </label>
                <input
                  type="password"
                  value={password1}
                  required={true}
                  onChange={({ target: { value } }) => setpassword1(value)}
                  id="password"
                />
              </div>
            </form>
          ) : (
            ""
          )}
        </span>
        <button className="mt-3" onClick={deleteAccount}>
          Submit Request
        </button>
      </Card>
    </>
  );
}
