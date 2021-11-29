import React, {useEffect, useState} from "react";
import {VscLoading} from "react-icons/vsc";
import Swal from "sweetalert2";
import {add_coupon, update_coupon_data} from '../../../../redux/actions'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import { FireToast } from "../../../Common/Toasta";

export default function CouponCode({setcouponInfo}) {

    // Redux State
    // const customer_cart_data = useSelector((state) => state.customer_cart_id);
    const customer_token = useSelector((state) => state.customer_token);
    const customer_details = useSelector((state) => state.customer_details);
    const coupon = useSelector((state) => state.coupon);
    const update_coupon_code = useSelector((state) => state.updateCoupon);
    const cartid = useSelector((state)=>state.customer_cart_id);
    const dispatch = useDispatch();

    // Local State
    const [loading, setLoading] = useState(false);
    const [couponInput, setCouponInput] = useState("");
    // const [couponCode, setCouponcode] = useState([])

    // console.log('code',couponCode)

    useEffect(() => {
        setCouponInput(coupon);
    }, [coupon]);

    // useEffect(() => {
    //     setCouponcode(update_coupon_code);
    // }, [update_coupon_code]);

    // Get Coupon Code
    // useEffect(() => {
    //     if (coupon) {
    //         AxiosMagentoAdminToken.post("get_discount_details", {
    //             coupon_code: coupon
    //         })
    //             .then((res) => {
    //                 setCouponcode(res.data[0])
    //                 dispatch(update_coupon_data(res.data[0]))
    //             }).catch((err) => {
    //             console.log(err,'err')
    //         })
    //     }
    // }, [coupon])

    // Apply Coupon API Integration
    const applyCoupon = (e) => {
        e.preventDefault();
        if (couponInput) {
            setLoading(true);
            cartid && axios.put(`${process.env.REACT_APP_MAGENTO_URI}carts/${cartid}/coupons/${couponInput}`,"",{ 
                headers:{
                    Authorization: "Bearer "+process.env.REACT_APP_MAGENTO_ADMIN_API,
                    ContentType: "application/json"
                }
            }
            )
                .then((res) => {
                    setLoading(false);
                    if (res.data === true) {
                        dispatch(add_coupon(couponInput));
                        // dispatch(update_coupon_data(couponCode))
                        dispatch(update_coupon_data(couponInput))
                        setcouponInfo(true)
                        FireToast({
                            icon:'success',
                            message:'Coupon code applied successfully'
                        })
                    }
                })
                .catch((err) => {
                    setLoading(false);
                    // Swal.fire(
                    //     "Oops!",
                    //     err?.response?.data?.message
                    //         ? err.response.data.message
                    //         : err.message,
                    //     "error"
                    // );
                    FireToast({
                        icon:'error',
                        message:err?.response?.data?.message
                                ? err.response.data.message
                                : err.message,
                    })
                });
        } else {
            Swal.fire("Oops!", "Enter Coupon Code!", "warning");
        }
    };

    // Delete Coupon API Integration
    const deleteCoupon = (e) => {
        e.preventDefault();
        setLoading(true);
        cartid && axios.delete(`${process.env.REACT_APP_MAGENTO_URI}carts/${cartid}/coupons`,{
            headers:{
                Authorization: "Bearer "+process.env.REACT_APP_MAGENTO_ADMIN_API,
                ContentType: "application/json"
            }
        }
        )
            .then((res) => {
                setLoading(false);
                dispatch(add_coupon(""));
                dispatch(update_coupon_data(""))
                FireToast({
                    icon:'success',
                    message:'Coupon code cancelled successfully'
                })
            })
            .catch((err) => {
                setLoading(false);
                FireToast({
                    icon:'error',
                    message:err?.response?.data?.message
                    ? err.response.data.message
                    : err.message,
                })
            });
    };

    return (
        <form onSubmit={applyCoupon} className="coupon_form">
            <div className="input_addon_group">
                <input
                    type="text"
                    placeholder="Enter discount code"
                    value={couponInput}
                    onChange={({target: {value}}) =>
                        setCouponInput(value)
                    }
                    disabled={coupon ? true : false}
                    className="discount-input"
                />
                <div className="input-group-append">
                    {coupon ? (
                        <button
                            disabled={loading}
                            onClick={deleteCoupon}
                            className="cart-btn discount-btn"
                        >
                            {loading ? (
                                <VscLoading className="loading"/>
                            ) : (
                                "Cancel"
                            )}
                        </button>
                    ) : (
                        <button
                            disabled={loading}
                            onClick={applyCoupon}
                            className="cart-btn discount-btn"
                        >
                            {loading ? (
                                <VscLoading className="loading"/>
                            ) : (
                                "Apply"
                            )}
                        </button>
                    )}
                </div>
            </div>
        </form>
    )
}