import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Orderlist({ orders, setOrders }) {
  let history = useHistory();
  const customer_email = useSelector((state) => state.customer_email);

  useEffect(() => {
    Axios.get(
      process.env.REACT_APP_MAGENTO_URI +
        "orders?searchCriteria[filterGroups][][filters][][field]=customer_email&searchCriteria[filterGroups][0][filters][0][value]=" +
        customer_email,
      {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
        },
      }
    )
      .then((res) => {
        setOrders(res.data);
        console.log(res);
      })
      .catch((err) => {
        history.push("/");
      });
  }, [customer_email]);
  return (
    <>
      <table className="table order-list">
        <thead>
          <tr>
            {/* <th></th> */}
            <th>ORDERS#</th>
            <th>DATE</th>
            <th>SHIP TO</th>
            <th>ORDER TOTAL</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.items.map(
              (
                {
                  increment_id,
                  created_at,
                  billing_address: { firstname, lastname },
                  total_paid,
                  status,
                },
                i
              ) => {
                console.log({
                  daf: "cds",
                  increment_id,
                  created_at,
                });
                return (
                  <tr>
                    {/* <td>{i + 1}</td> */}
                    <td>{increment_id}</td>
                    <td>
                      {new Date(created_at).getMonth() +
                        1 +
                        "/" +
                        new Date(created_at).getDate() +
                        "/" +
                        new Date(created_at).getFullYear()}
                    </td>
                    <td>{`${firstname} ${lastname}`}</td>
                    <td>${total_paid.toFixed(2)}</td>
                    <td>{status}</td>
                    <td>
                      <ul>
                        <li
                          onClick={() => history.push("/customer/order-view")}
                        >
                          View Order
                        </li>
                        <li>Reorder</li>
                      </ul>
                    </td>
                    {/* <td>ReOrder</td> */}
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </>
  );
}
