import React, { useState, useEffect} from "react";
import CheckoutHeader from "./fragment/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import Email from "./fragment/email";
import ShippingAddress from "./fragment/shippingAddress";
import ShippingMethod from "./fragment/shippingMethod";
import PaymentMethod from "./fragment/paymentMethod";
import OrderReview from "./fragment/orderReview";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { VscLoading } from "react-icons/vsc";
import { updateCart } from "../../../redux/actions";
import RegisterUserAddress from "./fragment/registerUserAddress";
import VerificationLevelOne from "./fragment/verificationLevelOne";
import DocUpload from "./fragment/docUpload";
import GetCartType from "./fragment/GetCardType";

export default function Checkout() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [shippingAddress, setShippingAddress] = useState({});
    const [shippingmethod, setshippingmethod] = useState(null);
    const [shippingDetails, setshippingDetails] = useState(null);
    const [adultSignature, setAdultSignature] = useState(null);
    const [BillingAddress, setBillingAddress] = useState({});
    const [creditcardInfo, setCreditcardInfo] = useState({});
    const [totalAmount, setTotalAmount] = useState(0);
    const [creditcardApproval, setcreditcardApproval] = useState(null);
    const [loginUserToken,setloginUserToken] = useState(useSelector((state) => state.customer_token));
    const [dobInfo, setDobInfo] = useState({ age: "", dob: "", ssn: "" });
    const [ShippingRegion, setShippingRegion] = useState(null);
    const [validateFields, setValidateFields] = useState(false);
    const cart_data = useSelector((state) => state.update_cart);
    const [creditCardType, setCreditCardType] = useState(null);
    const [magentouserid, setMagentouserid] = useState("");
    const [veratadStatus, setVeratadStatus] = useState(false);
    const [placeOrderLoading, setPlaceOrderLoading] = useState(false);
    const [smokingAge, setSmokingAge] = useState(false);
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [verifiedUser, SetVerifiedUser] = useState(false);
    const [verificaionlevel, SetVerificaionLevel] = useState(0);
    const [uploadFile, setUploadFile] = useState(null);
    const [uploadErrorMsg, setUploadErrorMsg] = useState("");
    const [totalData, settotalData] = useState({});
    const cartid = useSelector((state)=>state.customer_cart_id);
    const newCheckoutBillingAddress = useSelector((state)=> state.newCheckoutBillingAddress)
    const newCheckoutAddress = useSelector((state) => state.newCheckoutAddress); 

    console.log(cart_data,'data')

    useEffect(() => {
        const {
            cardNumber = "",
            expirationDate = "",
            cardCode = "",
        } = creditcardInfo;

        let authorize = {
            createTransactionRequest: {
                merchantAuthentication: {
                    name: process.env.REACT_APP_AUTHORIZE_NAME,
                    transactionKey: process.env.REACT_APP_AUTHORIZE_KEY,
                },
                refId: "1222ced321",
                transactionRequest: {
                    transactionType: "authOnlyTransaction",
                    amount: totalData && totalData?.grand_total,
                    payment: {
                        creditCard: {
                            cardNumber,
                            expirationDate,
                            cardCode,
                        },
                    },
                },
            },
        };
        if (
            cardNumber &&
            cardNumber.length === 16 &&
            expirationDate &&
            cardCode.length === 3
        ) {
            setcreditcardApproval("loading");
            axios.post(process.env.REACT_APP_AUTHORIZE_URL, authorize).then(
                ({
                    data: {
                        messages: { message },
                        transactionResponse: { accountType },
                    },
                }) => {
                    if (message[0].code === "I00001") {
                        setcreditcardApproval("success");
                        // setCreditCardType(accountType);
                    } else {
                        setcreditcardApproval("failed");
                    }
                }
            );
        }
    }, [creditcardInfo]);

    // Function to identify the card type
    useEffect(() => {
        if(creditcardInfo?.cardNumber){
            setCreditCardType(GetCartType(creditcardInfo?.cardNumber)) 
        }
    }, [creditcardInfo?.cardNumber])

    const onCheckboxClick = () => {
        setSmokingAge(!smokingAge);
    };
    useEffect(() => {
        if(smokingAge && !veratadStatus && !verifiedUser){
            SetVerificaionLevel(1);
        }
        else{
            SetVerificaionLevel(0); 
        }
    }, [smokingAge])

    const ageverification = () => {
        let info = Object.keys(BillingAddress).length ? BillingAddress : shippingAddress;
        const { age, dob, ssn } = dobInfo;
        let { phone, addr, state, city , fn , ln , zip} = info;
        if(phone && addr && state && city && fn && ln && zip && age && dob && ssn){
            let rest = {
                fn: fn,
                ln: ln,
                addr: addr,
                city: city,
                state: state,
                zip: zip,
                age: "21+",
                dob: dob,
                ssn: ssn,
                phone: phone,
                email: email,
                test_key: null
            };
            var axios = require('axios');
            var data = JSON.stringify({
                "user": "magento@elementvape.com",
                "pass": "Terfi4!fh76gfjjfnl$fhyu",
                "service": "AgeMatch5.0",
                "rules": null,
                "reference": email,
                "target": rest
            });
            var config = {
                method: 'post',
                url: 'https://headlessdev.elementvape.com/api/veratad',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };
            axios(config)
            .then(({data: {result: { action }}}) => {
                console.log('action',action)
                if (action === "PASS") {
                    setVeratadStatus(true);
                    SetVerificaionLevel(0);
                    sendData();
                } else {
                    SetVerificaionLevel(2);
                    setPlaceOrderLoading(false);
                }
            })
            .catch(function (error) {
                Swal.fire(
                    "Oops...",
                    "Something went wrong please try again later.",
                    "warning"
                ); 
            });
        }
        else{
            Swal.fire(
                "Oops...",
                "Provide Mentioned Information correctly",
                "warning"
            );  
        }
    };
    const uploadDocument = () =>{
        if(!uploadFile){
            setUploadErrorMsg("This is a required field.");
            setPlaceOrderLoading(false);
        }
        else{
            const formData = new FormData();
            formData.append("customer_id", magentouserid);
            formData.append("quote_id", cartid);
            formData.append("image" , uploadFile);
            axios.post(process.env.REACT_APP_MAGENTO_URI+"upload_verification_document",
            formData,{
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization:"Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
                    },
                }
            ).then((res) => {
                if (res.data[1] === "PASS") {
                    SetVerificaionLevel(0);
                    setUploadFile(null);
                    sendData();
                }
                else{
                    setPlaceOrderLoading(false);
                    setUploadErrorMsg("Something went wrong please try again later.")
                    setTimeout(() => {
                        setUploadErrorMsg("")
                    }, 5000);
                }
            })
            .catch((err) => {
                setPlaceOrderLoading(false);
                setUploadErrorMsg("Something went wrong please try again later.")
                setTimeout(() => {
                    setUploadErrorMsg("")
                }, 5000);
            });
        }
    }

    //Address Information
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

    //Card Information
    const reFormatCreditCardInfo = (card) => {
        return (
            card &&
            creditcardApproval === "success" && {
                method: "authnetcim",
                extension_attributes: {
                    agreement_ids: ["2"],
                },
                additional_data: {
                    cc_cid: card.cardCode,
                    cc_type: creditCardType,
                    cc_exp_month: card.expirationDate?.split('-')[1],
                    cc_exp_year: card.expirationDate?.split('-')[0],
                    cc_number: card.cardNumber,
                },
            }
        );
    };

    //shipping Information to pass in magento API
    const shippingInformation ={
        "customer_id": newCheckoutAddress?.customer_id,
        "region_id": newCheckoutAddress?.region_id,
        "country_id": newCheckoutAddress?.country_id,
        "street": newCheckoutAddress?.street,
        "telephone": newCheckoutAddress?.telephone,
        "postcode": newCheckoutAddress?.postcode,
        "city": newCheckoutAddress?.city,
        "firstname": newCheckoutAddress?.firstname,
        "lastname": newCheckoutAddress?.lastname,
        "region": newCheckoutAddress?.region?.region,
        "region_code": newCheckoutAddress?.region?.region_code
    }

    const billingInformation = {
        "customer_id": newCheckoutBillingAddress?.customer_id,
        "region_id": newCheckoutBillingAddress?.region_id,
        "country_id": newCheckoutBillingAddress?.country_id,
        "street": newCheckoutBillingAddress?.street,
        "telephone": newCheckoutBillingAddress?.telephone,
        "postcode": newCheckoutBillingAddress?.postcode,
        "city": newCheckoutBillingAddress?.city,
        "firstname": newCheckoutBillingAddress?.firstname,
        "lastname": newCheckoutBillingAddress?.lastname,
        "region": newCheckoutBillingAddress?.region?.region,
        "region_code": newCheckoutBillingAddress?.region?.region_code
    }

    //Place Order Function
    const placeOrder = () => {
        setValidateFields(true);  
        setPlaceOrderLoading(true);
        if (Object.keys(shippingAddress).length > 1) {
            if (cart_data.length > 0) {
                if (Object.keys(creditcardInfo).length > 2) {
                    if (creditcardApproval === "success") {
                        if (shippingmethod) {
                            if (smokingAge) {
                                if (termsAndConditions) {
                                    if(verificaionlevel == 1 && !veratadStatus){
                                        ageverification();
                                    }
                                    else if(verificaionlevel == 2 && !veratadStatus){
                                        uploadDocument();
                                    }
                                    else if(verifiedUser){
                                        sendData();
                                    }
                                } else {
                                    Swal.fire(
                                        "Oops...",
                                        " Accept Terms and Conditions",
                                        "warning"
                                    );
                                    setPlaceOrderLoading(false);
                                }
                            } 
                            else {
                                Swal.fire(
                                    "Oops...",
                                    "Age Not Verified",
                                    "warning"
                                );
                                setPlaceOrderLoading(false);
                            }
                        } else {
                            Swal.fire(
                                "Oops...",
                                "Select Shipping Method",
                                "warning"
                            );
                            setPlaceOrderLoading(false);
                        }
                    } else {
                        Swal.fire(
                            "Oops...",
                            "Invalid Credit card Information",
                            "warning"
                        );
                        setPlaceOrderLoading(false);
                    }
                } else {
                    Swal.fire(
                        "Oops...",
                        "Provide Card Information",
                        "warning"
                    );
                    setPlaceOrderLoading(false);
                }
            } else {
                Swal.fire("Oops...", "Invalid Items", "warning");
                setPlaceOrderLoading(false);
            }
        } else {
            Swal.fire("Oops...", "Provide Address Information", "warning");
            setPlaceOrderLoading(false);
        }
    };

    const sendData = () => {
        let billing_address = Object.keys(BillingAddress).length
            ? reformataddress(BillingAddress)
            : null;
        let shipping_address = reformataddress(shippingAddress);
        let items = cart_data.map((val) => {
            let {
                option_type_data,
                name,
                price,
                media_gallery_entries,
                ...rest
            } = val;
            return rest;
        });
        let creditCardInfo = reFormatCreditCardInfo(creditcardInfo);
        let body;
        if (magentouserid) {
            body = {
                items,
                shipping_address,
                billing_address,
                shippingmethod,
                creditCardInfo,
                email,
                dobInfo,
                magentouserid: magentouserid,
                loginUserToken,
            };
        } else {
            body = {
                items,
                shipping_address,
                billing_address,
                shippingmethod,
                creditCardInfo,
                email,
                dobInfo,
            };
        }

        // *********** Magento Shipping and Payment Information API ************//

        axios.post(process.env.REACT_APP_MAGENTO_URI + "carts/mine/shipping-information",
        {
            addressInformation:{
                shipping_address:shippingInformation,
                billing_address:billingInformation,
                shipping_carrier_code: "nonvapeusps",
                shipping_method_code: "nonvapeusps"
            }
        },
        {
            headers:{
                Authorization:'Bearer '+ loginUserToken
            }
        })
        .then(res=>{
            if(res.status===200){
                axios.post(process.env.REACT_APP_MAGENTO_URI + "carts/mine/payment-information",
                    {
                        paymentMethod:reFormatCreditCardInfo(creditcardInfo),
                        billing_address:billingInformation,
                        shipping_address:shippingInformation  
                    },
                    {
                        headers:{
                            Authorization:'Bearer '+ loginUserToken
                        }
                    })
                    .then((res1)=>{
                        if(res1.status===200){
                            axios.post(process.env.REACT_APP_NODE_URL + "checkout", body)
                            .then((res2) => {
                                if (res2.status === 200) {
                                    Swal.fire(
                                        "Success",
                                        "We are processing your order, we will update you once the order is been placed",
                                        "success"
                                    ).then(() => {
                                        dispatch(updateCart([]));
                                        history.push("/");
                                        setPlaceOrderLoading(false);
                                    }).catch((err)=>{
                                        console.log(err);
                                        setPlaceOrderLoading(false);
                                    })   
                                }
                            });
                        } 
                    })
                    .catch(err=>{
                        console.log(err);
                        setPlaceOrderLoading(false);
                    })
            }
        })
        .catch(err=>{
            console.log(err);
            setPlaceOrderLoading(false);
        })

        //Credit card validation
        if (creditcardApproval === "success") {
        } else {
            Swal.fire(
                "",
                "Please fill the credit card information correctly",
                "warning"
            );
            setPlaceOrderLoading(false);
        }
    };
    return (
        <>
            <CheckoutHeader className="new_header_block" />
            <div className="check_out_body_new">
                <h2 className="check_out_header">Checkout</h2>
                <div className=" checkout_container">
                    <Row>
                        <Col sm={12} md={6}>
                            {loginUserToken ? (
                                <RegisterUserAddress
                                    loginUserToken={loginUserToken}
                                    setShippingAddress={setShippingAddress}
                                    setMagentouserid={setMagentouserid}
                                    setemail={setemail}
                                    SetVerifiedUser={SetVerifiedUser}
                                    setShippingRegion={setShippingRegion}
                                />
                            ) : (
                                <ShippingAddress
                                    setshippingmethod={setshippingmethod}
                                    setShippingAddress={setShippingAddress}
                                    shippingAddress={shippingAddress}
                                    setShippingRegion={setShippingRegion}
                                    validateFields={validateFields}
                                />
                            )}
                            <ShippingMethod
                                shippingAddress={shippingAddress}
                                setshippingmethod={setshippingmethod}
                                shippingmethod={shippingmethod}
                                loginUserToken={loginUserToken}
                                email={email}
                                setshippingDetails={setshippingDetails}
                                setAdultSignature={setAdultSignature}
                                adultSignature={adultSignature}
                            />
                            <PaymentMethod
                                setCreditcardInfo={setCreditcardInfo}
                                creditcardApproval={creditcardApproval}
                                BillingAddress={BillingAddress}
                                setBillingAddress={setBillingAddress}
                                validateFields={validateFields}
                                creditcardInfo={creditcardInfo}
                            />
                             <div className="border-box m-t-20">
                                <h2>
                                    <span className="title">Age Verification</span>
                                </h2>
                                <div className="age-verification-block">
                                    <p>
                                        Element Vape has partnered up with Veratad Technologies
                                        Age Verification, an industry leader in age verification
                                        that uses billions of records from trusted and secured
                                        sources to ensure that all customers meet the legal
                                        smoking age. The information submitted are secured and
                                        will not be shared nor accessible. It is our job to
                                        ensure that you receive your packages in the timely
                                        manner. If we are unable to verify your age, we will
                                        contact you immediately for further verification.
                                    </p>
                                </div>
                                <div className="checkout-agreements">
                                    <input
                                        onClick={onCheckboxClick}
                                        checked={smokingAge}
                                        type="checkbox"
                                        id="legal_age"
                                        className="custom_check_hiden"
                                    />{" "}
                                    <label htmlFor="legal_age" className="custom_check_box">
                                        <span>
                                            I am of legal smoking age (21 and over in the U.S.)
                                            in the jurisdiction which I reside.<em>*</em>
                                        </span>
                                    </label>
                                </div>
                                {verificaionlevel == 1 && (
                                    <div className="dropdwon_saved_address">
                                        <VerificationLevelOne 
                                            setDobInfo={setDobInfo}
                                         />
                                    </div>
                                )}
                                {verificaionlevel == 2 && (
                                    <div className="dropdwon_saved_address">
                                        <DocUpload 
                                            setUploadFile={setUploadFile}
                                            uploadFile={uploadFile}
                                            uploadErrorMsg={uploadErrorMsg}
                                            setUploadErrorMsg={setUploadErrorMsg}
                                        />
                                    </div>
                                )}
                                <div className="checkout-agreements">
                                    <input
                                        checked={termsAndConditions}
                                        onClick={() =>
                                            setTermsAndConditions(
                                                (termsAndConditions) => !termsAndConditions
                                            )
                                        }
                                        type="checkbox"
                                        id="term_condition"
                                        className="custom_check_hiden"
                                    />{" "}
                                    <label
                                        htmlFor="term_condition"
                                        className="custom_check_box"
                                    >
                                        <span>
                                            I have read and agree to{" "}
                                            <span className="red">Terms and Conditions</span> &{" "}
                                            <span className="red">Privacy Policy</span>
                                            <em>*</em>
                                        </span>
                                    </label>
                                </div>
                                <button onClick={placeOrder} className="place-order">
                                    {placeOrderLoading ? (
                                        <span>
                                            <VscLoading className="loading"/>
                                        </span>
                                    ) : (
                                        "PLACE ORDER"
                                    )}
                                </button>
                                
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <OrderReview
                                loginUserToken={loginUserToken}
                                shippingDetails={shippingDetails}
                                adultSignature={adultSignature}
                                cart_data={cart_data}
                                setTotalAmount={setTotalAmount}
                                cartid={cartid}
                                shippingAddress={shippingAddress}
                                reformataddress={reformataddress}
                                magentouserid={magentouserid}
                                settotalData = {settotalData}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
