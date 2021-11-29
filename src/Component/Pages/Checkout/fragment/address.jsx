import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import countrydata from "../../Cart/country.json";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { FireToast } from "../../../Common/Toasta";
import {
    update_customer_details,
    update_new_checkout_Address,
    update_new_checkout_billing_address
} from "../../../../redux/actions";
import { VscLoading } from "react-icons/vsc";

export default function Address({
    setdata,
    setShippingRegion = null,
    setshippingmethod = null,
    validateFields,
    address,
    checkout_page,
    setnewAdd,
    setUserData,
    setaddcode,
    paymentMethod,
    setupdate
    // setSelectedAddress,
}) {
    const dispatch = useDispatch();
    const customerdetails = useSelector((state) => state.customer_details);
    const newCheckoutBillingAddress = useSelector((state)=> state.newCheckoutBillingAddress)
    const [region, setregion] = useState([]);
    const [countryId, setcountryId] = useState('US');
    const [click, setclick] = useState(false);
    const [saveAddressBook, setsaveAddressBook] = useState(false);
    const [zipError, setzipError] = useState(false);
    const [loading,setloading] = useState(false);

    const errorText = 'This is a required field.'; 

    const updateState = ({ target: { name, value } }) => {
        setdata((data) => ({ ...data, [name]: value }));
    };

    //Function to get state regions
    const setregionfunc = ({target}) => {
        let temp = false;
        countrydata.map(({ available_regions = [], id }) => {

            if (target.value ? id === target.value : id===countryId) {
                // available_regions.length && setShipping("FedEx");
                setregion(available_regions);
                available_regions &&
                    setShippingRegion &&
                    setShippingRegion(available_regions);
                if (setshippingmethod) {
                    available_regions.length
                        ? setshippingmethod("fedexflatrate")
                        : setshippingmethod("freeshipping");
                }
                temp = true;
                updateState({ target });
                if (available_regions.length) {
                    updateState({
                        target: {
                            name: "state",
                            value: JSON.stringify(available_regions[0]),
                        },
                    });
                } else {
                    updateState({
                        target: {
                            name: "state",
                            value: "",
                        },
                    });
                }
            }
        });
        // temp && setShipping("International");
    };

    useEffect(() => {
        setregionfunc({ target: { value: address.state, name: "state" } });
    }, []);

    //Validation function
    const handleValidation = ()=>{
        setclick(true);
        const {fn,ln,addr,zip,state,phone,city} = address;
        if((fn && ln && addr && zip && state && phone && city && countryId && !zipError)){
            setclick(false)
            handleSaveAddressBook();
        }
    }

    // Condition whether to save address in address book
    const handleSaveAddressBook = ()=>{
        const state = countryId === 'US' &&  JSON?.parse(address?.state);
        const newAddress ={
                  // "id": 1533510,
            "customer_id": customerdetails.id,
            "region": {
                "region_code": state?.code ? state?.code : "",
                "region":state?.name || address.state,
                "region_id":state?.id ? parseInt(state?.id) : null,
            },
            "region_id":state?.id ? parseInt(state?.id): null,
            "country_id": countryId,
            "street": [address?.addr],
            "telephone": address?.phone,
            "postcode": address?.zip,
            "city": address?.city,
            "firstname": address?.fn,
            "lastname": address?.ln,
            "default_shipping": false,
            "default_billing": false,
        }

        const details = { ...customerdetails };
        const addresses = [...details.addresses, newAddress]
        details.addresses = addresses;

        if (!checkout_page) {
            addNewAddress(details);
        } else {
            if (!saveAddressBook) {
                if(!paymentMethod){
                    dispatch(update_new_checkout_Address(newAddress));
                    FireToast({
                        icon:'success',
                        message:'Shipping address added successfully'
                    })
                    setnewAdd(false);
                }else{
                    dispatch(update_new_checkout_billing_address(newAddress));
                    FireToast({
                        icon:'success',
                        message:'Billing address added successfully'
                    })
                    setupdate(true)
                }
            }
            else {
                addNewAddress(details,newAddress);
            }
        }
    }

    //Function to add new shipping address
    const addNewAddress = (details,newAddress)=>{
        setloading(true)
        axios.put(`${process.env.REACT_APP_MAGENTO_URI}customers/${customerdetails.id}`,
        {
            customer:details
        },
        {
            headers:{
                Authorization:'Bearer '+ process.env.REACT_APP_MAGENTO_ADMIN_API
            }
        })
        .then((res)=>{
            if(res.status === 200){
                if(!paymentMethod){
                    setUserData(details)
                    dispatch(update_new_checkout_Address(newAddress));
                }else{
                    setUserData(details)
                    dispatch(update_new_checkout_billing_address(newAddress));
                }
                dispatch(update_customer_details(res.data));
                FireToast({
                    icon:'success',
                    message:'Shipping address added successfully'
                })
                setnewAdd(false)
                setloading(false)
                paymentMethod && setupdate(true)
                // !checkoutPage && history.push("/customer/address");
            }
        })
        .catch((error)=>{
            FireToast({
                icon:'error',
                message:'Error occured while adding shipping address'
            })
            setloading(false)
        })
    }

    //Zipcode validation
    const validateZip = (zip)=>{
        if(zip){
            axios.get(`https://www.elementvape.com/check/allow/zip?zip_code=30004`)
            .then((res)=>{
                if(res.status===200){
                    res.success === true ? setzipError(false) : setzipError(true)
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    // dropdwon_saved_address
    return (
        <div className={ paymentMethod ? 'new_address' : 'new_address dropdwon_saved_address' }>
            {paymentMethod ? null : <h6>Add a New Shipping Address</h6>}
            <Row>
                <Col sm={6}>
                    <div
                        className={`input-field ${
                            validateFields && "validate"
                        }`}
                    >
                        <label htmlFor="fn">Legal First Name</label>
                        <i className='fa fa-asterisk icon-required'></i>
                        <input
                            // required
                            value={address && address.fn}
                            onChange={updateState}
                            name="fn"
                            id="fn"
                            type="text"
                        />
                        {click && !address.fn ? <p className='error-text'>{errorText}</p> : null}
                    </div>
                </Col>
                <Col sm={6}>
                    <div
                        className={`input-field ${
                            validateFields && "validate"
                        }`}
                    >
                        <label htmlFor="ln">Legal Last Name</label>
                        <i className="fa fa-asterisk icon-required"></i>
                        <input
                            onChange={updateState}
                            // required
                            value={address && address.ln}
                            name="ln"
                            type="text"
                            id="ln"
                        />
                        {click && !address.ln ? <p className='error-text'>{errorText}</p> : null}
                    </div>
                </Col>
            </Row>
            <div className={`input-field ${validateFields && "validate"}`}>
                <label htmlFor="addr">Address</label>
                <i className="fa fa-asterisk icon-required"></i>
                <input
                    // required
                    onChange={updateState}
                    name="addr"
                    value={address && address.addr}
                    type="text"
                />
                {click && !address.addr ? <p className='error-text'>{errorText}</p> : null}
            </div>
            <div className={`input-field`}>
                <label htmlFor="suite">Unit, Apt, Suite, etc (Optional)</label>
                <input
                    onChange={updateState}
                    name="suite"
                    value={address && address.suite}
                    type="text"
                />
            </div>
            {/* <div className={`input-field `}>
                <label htmlFor="addr1">Street Address Line 2</label>
                <input
                    required
                    onChange={updateState}
                    name="addr1"
                    type="text"
                />
            </div> */}
            <div className={`input-field ${validateFields && "validate"}`}>
                <label htmlFor="city">City</label>
                <i className="fa fa-asterisk icon-required"></i>
                <input
                    // required
                    onChange={updateState}
                    value={address && address.city}
                    name="city"
                    type="text"
                />
                {click && !address.city ? <p className='error-text'>{errorText}</p> : null}
            </div>
            <Row>
                <Col sm={6}>
                    <div className={`input-field ${validateFields && "validate"}`}>
                        <label htmlFor="state"> State/Province </label>
                        <i className="fa fa-asterisk icon-required"></i>
                        {region.length ? (
                            <select
                                // required
                                onChange={updateState}
                                name="state"
                                id="state"
                            >
                                {/* <option value="" selected disabled>
                                    {" "}
                                    -- Select Country --
                                </option> */}
                                {region.map((val) => {
                                    return (
                                        <option value={val && JSON.stringify(val)}>
                                            {val.name}
                                        </option>
                                    );
                                })}
                            </select>
                        ) : (
                            <div className="DropDown">
                                <input
                                    onChange={updateState}
                                    // required
                                    name="state"
                                    type="text"
                                />
                            </div>
                        )}
                        {click && !address.state ? <p className='error-text'>{errorText}</p> : null}
                    </div>
                </Col>
                <Col sm={6}>
                    <div className={`input-field ${validateFields && "validate"}`}>
                        <label htmlFor="zip">Zip/Postal Code</label>
                        <i class="fa fa-asterisk icon-required"></i>
                        <input
                            onBlur={()=>validateZip(address.zip)}
                            onChange={updateState}
                            value={address && address.zip}
                            // required
                            name="zip"
                            id="zip"
                            type="text"
                        />
                        {zipError ? <p className='zip-error'>We do not ship to your Zip Code at the moment. You may enter the address of your places of work in case we do service in the area. Our team will increase the shipping coverage weekly so please check in with us in a few weeks.</p> : null}
                        {click && !address.zip ? <p className='error-text'>{errorText}</p> : null}
                    </div>                    
                </Col>
            </Row>
            <div className={`input-field ${validateFields && "validate"}`}>
                <label htmlFor="country"> Country </label>
                <i className="fa fa-asterisk icon-required"></i>
                <select
                    required
                    onChange={(e)=>{
                        setcountryId(e.target.value)
                        setregionfunc(e)
                    }}
                    name="country"
                    id="country"
                >
                    {countrydata.map((country) => {
                        return (
                            <option
                                selected={country.id === 'US'}
                                value={country.id}
                            >
                                {country.full_name_english}
                            </option>
                        );
                    })}
                </select>
                {click && !countryId ? <p className='error-text'>{errorText}</p> : null}
            </div>
            {
                countryId !== 'US'? (
                    <div className='input-field note-message'>
                        <p>Note: FX fees, duties, VAT, and any other shipping related fees are not covered and customers are responsible for these payments. If your order is rejected by customs or has wrong address delivery, any charges for the return package is subject to deduction from the original payment.</p>
                    </div>
                ):null
            }
            <div className={`input-field ${validateFields && "validate"}`}>
                <label htmlFor="phone">Phone Number</label>
                <i className="fa fa-asterisk icon-required"></i>
                <input
                    onChange={updateState}
                    // required
                    name="phone"
                    id="number"
                    value={address && address.phone}
                    type="number"
                    onWheel={() => document.activeElement.blur()}
                />
                {click && !address.phone ? <p className='error-text'>{errorText}</p> : null}
            </div>
            <div className={`input-field ${validateFields && "validate"} checkbox-field`}>
                <input
                    onClick={()=>{
                        saveAddressBook ? setsaveAddressBook(false) : setsaveAddressBook(true)
                        // saveAddressBook ? setgetSaveAddress(false) : setgetSaveAddress(true)
                    }}
                    name="addressBook"
                    value={address && address.addressBook}
                    type="checkbox"
                    checked = {saveAddressBook ? true : false}
                />
                <label htmlFor="addressBook">Save in address book</label>
            </div>
            {
                // !paymentMethod ? (
                    <div className='input-field button-field'>
                        <button
                            className='button-field-ship-btn'
                            onClick={()=>{
                                handleValidation()
                                !paymentMethod && setaddcode(null)
                                // setSelectedAddress(null)
                            }}
                        >
                            {loading ? (
                                    <VscLoading className="loading"/>
                            ):(!paymentMethod ? 'Ship to this address': 'update')}
                        </button>
                        {
                            !paymentMethod ? (
                                <button
                                    className='button-field-cancel-btn'
                                    onClick = {()=>setnewAdd(false)}
                                >
                                    Cancel
                                </button>
                            ):null
                        }

                    </div>
                // ):null
            }
        </div>
    );
}
