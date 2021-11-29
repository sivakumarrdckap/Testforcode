import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Address from "./address";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import countrjJSON from "../../Cart/country.json";
import {
    update_new_checkout_Address,
} from "../../../../redux/actions";
export default function RegisterUserAddress({
    loginUserToken,
    setShippingAddress,
    setMagentouserid,
    setShippingRegion,
    setemail,
    setshippingmethod,
    SetVerifiedUser,
}) {
    let history = useHistory();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);
    const [addNewAddress, setaddNewAddress] = useState(null);
    const [addcode, setaddcode] = useState(null);
    const [SelectedAddress, setSelectedAddress] = useState(null);
    const [savedAddress, setsavedAddress] = useState(false);
    const [newAdd, setnewAdd] = useState(false);
    const newCheckoutAddress = useSelector((state) => state.newCheckoutAddress);


    useEffect(() => {
        Axios.get(process.env.REACT_APP_MAGENTO_URI + "customers/me", {
            headers: {
                Authorization: "Bearer " + loginUserToken,
            },
        })
            .then(({ data, status }) => {
                if (status === 200) {
                    setUserData(data);
                    if (Array.isArray(data.addresses)) {
                        data.addresses.map((addr,i)=>(
                            addr.default_shipping && (
                                setShippingAddress(
                                    reFormatandSaveToState(addr)
                                ),
                                setSelectedAddress(addr)
                            )
                        ))
                    }
                    setMagentouserid(data.id);
                    setemail(data.email);
                    data.custom_attributes.map((user) => {
                        if(user.attribute_code == "isverified"){
                            if(user.value == "Yes"){
                                SetVerifiedUser(true)
                            }
                        }
                    });
                }
            })
            .catch((err) => {
                if (err?.response?.status === 401) {
                    Swal.fire("", "Login Expired", "error").then(() => {
                        history.push("/account/login");
                    });
                } else {
                    Swal.fire("", "Error Retriving User Data", "error");
                }
            });
    }, []);

    const reFormatandSaveToState = ({
        firstname,
        lastname,
        street,
        city,
        postcode,
        telephone,
        country_id,
        region,
    }) => {
        return {
            fn: firstname,
            ln: lastname,
            addr: street[0],
            addr1: street[1] ? street[1] : "",
            city,
            zip: postcode,
            phone: telephone,
            state: country_id,
            country: JSON.stringify({
                name: region.region,
                id: region.region_id,
                code: region.region_code,
            }),
        };
    };

    useEffect(() => {
        dispatch(update_new_checkout_Address(SelectedAddress));
    }, [SelectedAddress])

    //Display only 5 addresses
    useEffect(() => {
        if(userData?.addresses?.length > 5 ){
            const remainingAddress = userData?.addresses?.filter(address=>(
                !address.default_shipping === true
            ))
            const defaultAddress = userData?.addresses?.find(address=>address.default_shipping);
            const combinedArr = remainingAddress?.reverse().splice(0,4);
            combinedArr.unshift(defaultAddress)

            userData.addresses = combinedArr
        }
    }, [userData])

    return (
        <div className="border-box user-address">
            <h2><span className="title">SHIPPING ADDRESS</span></h2>
            {userData ? (
                <>
                    <div className="default_address">
                        <div className="shipping_address_title">
                            Your Shipping Address
                        </div>
                        <div className="default_address_inner">
                            {newCheckoutAddress ? (
                                <>
                                    <div className="location_icon_left">
                                        <i className="fas fa-map-marked-alt"></i>
                                    </div>
                                    <address className="delivery_address_right">
                                        {newCheckoutAddress.firstname +
                                            " " +
                                            newCheckoutAddress.lastname}{" "}
                                        <br />
                                        {newCheckoutAddress.street.map(
                                            (streets) => (
                                                <span>
                                                    {streets} <br />
                                                </span>
                                            )
                                        )}
                                        {newCheckoutAddress.city}{" "}
                                        {newCheckoutAddress.postcode} <br />
                                        {newCheckoutAddress.telephone}
                                    </address>
                                </>
                            ) : null
                            }
                        </div>
                    </div>
                    <div className="address_link_wrapper">
                        <div className="add_saved_links">
                            <div
                                className="add_new_address"
                                onClick={() => {
                                    setsavedAddress(!savedAddress);
                                    setnewAdd(false);
                                }}
                            >
                                <i className="fas fa-cloud-upload-alt"></i>{" "}
                                Saved Address
                            </div>
                            <div
                                className="add_new_address"
                                onClick={() => {
                                    setaddNewAddress({
                                        fn: userData.firstname,
                                        ln: userData.lastname,
                                    });
                                    setsavedAddress(false);
                                    setnewAdd(!newAdd);
                                }}
                            >
                                <i className="fas fa-plus-circle"></i> Add New
                                Address
                            </div>
                        </div>
                        {addNewAddress && newAdd ? (
                            <>
                                <Address
                                    address={addNewAddress}
                                    setdata={setaddNewAddress}
                                    checkout_page={true}
                                    setnewAdd = {setnewAdd}
                                    setUserData={setUserData}
                                    setaddcode={setaddcode}
                                    paymentMethod={false}
                                />
                            </>
                        ) : null}
                        {savedAddress ? (
                            <div className="dropdwon_saved_address">
                                <Row>
                                    {userData.addresses.map(
                                        (
                                            {
                                                id,
                                                firstname,
                                                lastname,
                                                street: streets,
                                                postcode,
                                                city,
                                                telephone,
                                            },
                                            i
                                        ) => {
                                            return (
                                                <Col
                                                    key={i}
                                                    sm={6}
                                                    lg={6}
                                                    md={6}
                                                >
                                                    <div
                                                        className={`address_list ${
                                                            newCheckoutAddress ? (
                                                                newCheckoutAddress.id === id ? 'selected' : 'not-selected'
                                                            ):
                                                            (addcode === i && 'selected')
                                                        }`}
                                                    >
                                                        <p>
                                                            {firstname +
                                                                " " +
                                                                lastname}
                                                        </p>
                                                        {streets.map(
                                                            (street) => (
                                                                <p>{street}</p>
                                                            )
                                                        )}
                                                        <p>
                                                            {postcode},{city}
                                                        </p>
                                                        <p>{telephone}</p>
                                                        <a
                                                            className="ship_to_this_address"
                                                            onClick={() => {
                                                                setShippingAddress(
                                                                    reFormatandSaveToState(
                                                                        userData
                                                                            .addresses[
                                                                            i
                                                                        ]
                                                                    )
                                                                );
                                                                setSelectedAddress(
                                                                    userData
                                                                        .addresses[
                                                                        i
                                                                    ]
                                                                );
                                                                setaddcode(i);
                                                                setTimeout(() => {
                                                                    setsavedAddress(
                                                                        !savedAddress
                                                                    );
                                                                }, 1000);
                                                                
                                                            }}
                                                        >
                                                            Ship To This Address
                                                        </a>
                                                    </div>
                                                </Col>
                                            );
                                        }
                                    )}
                                </Row>
                            </div>
                        ) : null}
                    </div>
                </>
            ) : (
                <Skeleton width={"100%"} height={200} />
            )}
        </div>
    );
}
