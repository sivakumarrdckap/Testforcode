import axios from "axios";
import React, { useState,useEffect } from "react";
import Swal from "sweetalert2";

export default function ShippingMethod({
    setshippingmethod,
    shippingAddress,
    loginUserToken,
    shippingmethod,
    email,
    setshippingDetails,
    setAdultSignature,
    adultSignature
}) {
    const [loading, setLoading] = useState(false);
    const [shipinginfo, setshipinginfo] = useState([]);
    const reformataddress = ({
        fn: firstname,
        ln: lastname,
        city,
        zip: postcode,
        country,
        addr1,
        state,
        phone,
    }) => {
        return {
            region: country && JSON.parse(country).name,
            region_id: country && JSON.parse(country).id,
            region_code: country && JSON.parse(country).code,
            country_id: state,
            street: [addr1],
            postcode,
            city,
            firstname,
            lastname,
            customer_id: 4,
            email,
            telephone: phone,
            same_as_billing: 1,
        };
    };
    const formatedAddress = reformataddress(shippingAddress);
    useEffect(() => {
        if(Object.keys(shippingAddress).length && formatedAddress){
            setLoading(true)
            axios.post(process.env.REACT_APP_MAGENTO_URI+"carts/mine/estimate-shipping-methods",
            {address: formatedAddress},{
            headers: {
                Authorization: "Bearer " + loginUserToken,
            }}
            ).then((res) => {
                if (res.status === 200) {
                    setshippingmethod(res.data[0].carrier_code);
                    setshipinginfo(res.data);
                    setshippingDetails(res.data[0])
                    setLoading(false);
                }
            })
            .catch((err) => {
                Swal.fire("Oops!","Something went wrong please try again later.", "error");
                setLoading(false)
            });
        }
    }, [shippingAddress]);
    useEffect(() => {
        if(Object.keys(shippingAddress).length && formatedAddress && formatedAddress.country_id){
            setLoading(true)
            const adultSignRequest  = new FormData();
            adultSignRequest.append("country", formatedAddress.country_id);
            axios.post(process.env.REACT_APP_MAGENTO_URI+"get_adult_signature_fees",
            adultSignRequest,{
            headers: {
                Authorization: "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
            }}
            ).then((res) => {
                setAdultSignature(res.data)
            })
            .catch((err) => {
                console.log({err})
                Swal.fire("Oops!","Something went wrong please try again later.", "error");
            });
        }
    }, [shippingAddress]);
    return (
        shipinginfo.length ? <div className={`border-box ${loading ? "shipment_load" : null}`}>
            <h2>
                <span className="title">Shipping Method</span>
                {loading ? <i class="fas fa-spinner fa-spin m-l-auto"></i> : null}
            </h2>
            <div className="payment_option_list_wrap">
                {shipinginfo.map((method , j)=>{
                    return(
                        <>
                            <div className="payment_options_list">
                                <input
                                    id={method.carrier_code}
                                    type="radio"
                                    onClick={() => {
                                        setshippingmethod(method.carrier_code)
                                        setshippingDetails(method)
                                    }}
                                    checked={shippingmethod === method.carrier_code ? true : false}
                                    name="shipping"
                                    className="custom_radio_hidden"
                                />
                                <label
                                    htmlFor={method.carrier_code}
                                    className="ship_method_radio_btn"
                                >
                                    <div className="ship-method">
                                    {method.carrier_title}
                                    </div>
                                    <div className="ship-price">${method.amount}.00</div>
                                </label>
                            </div>
                            {method.error_message && <div className="alert_bar_geay"><i class="fal fa-exclamation-triangle"></i> <span>{method.error_message}</span></div>}
                        </>
                    )
                })}
            </div>
            <div className="adult_signature_wrap">
                <span className="adult_signature ">
                    Adult Signature Service{" "}
                    <i className="far fa-question-circle question_hover"></i>
                    <div className="hover_dropDown">
                        All orders will require Adult Signature Service.See Help Center for more details
                    </div>
                </span>
                <span className="service_charge">${adultSignature}.00</span>
            </div>
        </div>:null
    );
}
