import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import {
  update_customer_details,
  update_customer_token,
  update_customer_email,
  update_customer_cart_id,
  updateCart
} from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Addressbook from "./components/addressBook";
import Orderlist from "./components/orderList";
import AccountInfo from "./components/accountInfo";
import SideBar from "./components/sideBar";
import Wishlist from "./components/wishlist";
import { FaExternalLinkAlt } from "react-icons/fa";
import Orderview from "./components/orderView";
import Orderinfoblock from "./components/orderInfoBlock";
import Customeraddressbook from "./components/customerAddress";
import Title from "./components/title";
import AccountEdit from "./components/accountEdit";
import PrivacySettings from "./components/privacySettings";
import NewsLetter from "./components/newsLetter";
import Swal from "sweetalert2";

export default function Account() {
  let history = useHistory();
  const [isActive, setActive] = useState(false);
  const showHideMenu = () => {
    setActive((isActive) => !isActive);
    document.documentElement.classList.toggle("account-nav-open");
    document.body.classList.toggle("account-nav-open");
  };
  const dispatch = useDispatch();
  const customerdetails = useSelector((state) => state.customer_details);
  const customertoken = useSelector((state) => state.customer_token);
  const cartid = useSelector((state)=>state.customer_cart_id)
  const [orders, setOrders] = useState(null);
  const [wishlistData, setWishlistData] = useState(null);
  const path = window.location.pathname;
  useEffect(() => {
    if (customertoken) {
      Axios.get(process.env.REACT_APP_MAGENTO_URI + "customers/me", {
        headers: {
          Authorization: "Bearer " + customertoken,
        },
      })
        .then((res) => {
          dispatch(update_customer_details(res.data));
        })
        .catch((err) => {
          history.push("/");
          dispatch(update_customer_details(""));
          dispatch(update_customer_email(""));
          dispatch(update_customer_token(""));
        });
    }
  }, []);

  console.log('token',customertoken)
  console.log('details',customerdetails)

    //Creating a cart
    useEffect(() => {
      if(customertoken){
        Axios.post(
          process.env.REACT_APP_MAGENTO_URI + "carts/mine/",
          "",
            {
                headers: {
                    Authorization: "Bearer " + customertoken,
                },
            }
          )
          .then((res) => {
              console.log('cart_id',res)
              if (res.status === 200){
                dispatch(update_customer_cart_id(res.data));
              } 
          })
          .catch((err) => {
              dispatch(update_customer_cart_id(''));
              if (err.response.status === 401)
                  history.push("/session-expired");
              // FireToast({
              //     icon: "error",
              //     message: "Your session has expired",
              // });
              Swal.fire('Error', 'Your session has expired', 'error')
          });
      }
  }, [cartid])

  //Getting cart info
  useEffect(() => {
      // if(!cartid){
        Axios.get(process.env.REACT_APP_MAGENTO_URI + "carts/mine/items", {
          headers: {
              Authorization: "Bearer " + customertoken,
          },
        })
          .then((res) => {
              console.log('cartItems',res)
              dispatch(updateCart(res.data));
          })
          .catch((err)=>{
            history.push('/');
            dispatch(updateCart(''));
            // Swal.fire('Error','Error is getting the cart','error');
            console.log(err);
          })
      // }
  }, [cartid])
  
  return (
    <div className="page-main account">
      <div className="cus-container">
        <Title path={path} />
        <Row>
          <Col sm={3}>
            <SideBar
              showHideMenu={showHideMenu}
              isActive={isActive}
              setActive={setActive}
              path={path}
            />
          </Col>
          <Col sm={9}>
            {path === "/account" ? (
              <>
                <AccountInfo customerdetails={customerdetails} />
                <Addressbook />
                <Card className="order-list">
                  <div className="card-title">
                    <h3>RECENT ORDERS</h3>
                    <span className="manage-add-btn">
                      View All{" "}
                      <span>
                        <FaExternalLinkAlt />{" "}
                      </span>
                    </span>
                  </div>
                  <Orderlist orders={orders} setOrders={setOrders} />
                </Card>
              </>
            ) : path === "/sales/order/history" ? (
              <Card className="order-list">
                <Orderlist orders={orders} setOrders={setOrders} />
              </Card>
            ) : path === "/wishlist" ? (
              <Wishlist
                wishlistData={wishlistData}
                setWishlistData={setWishlistData}
              />
            ) : path === "/customer/order-view" ? (
              <>
                <Orderview />
                <Card className="order-info">
                  <div className="card-title">
                    <h3>ORDER INFORMATION</h3>
                  </div>
                  <Orderinfoblock />
                </Card>
              </>
            ) : path === "/customer/address" ? (
              <Customeraddressbook />
            ) : path === "/account/edit" ? (
              <AccountEdit />
            ) : path === "/gdpr/customer/settings" ? (
              <PrivacySettings />
            ) : path === "/newsletter/manage" ? (
              <NewsLetter />
            ) : path === "/amstorecredit" ? (
              <Wishlist />
            ) : path === "/rewards/account" ? (
              <Wishlist />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}
