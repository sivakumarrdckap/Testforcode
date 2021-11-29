import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SiAmericanexpress, SiMastercard, SiVisa } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa";
import { useState,useEffect } from "react";
import Address from "./address";
import { useSelector,useDispatch } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import cards from "../../../../image/cards.svg";
import countrydata from "../../Cart/country.json";
import {
    update_new_checkout_billing_address,
} from "../../../../redux/actions";
import Skeleton from "react-loading-skeleton";

export default function PaymentMethod({
    setBillingAddress,
    setCreditcardInfo,
    BillingAddress,
    creditcardApproval,
    validateFields,
    creditcardInfo
}) {
    let dispatch = useDispatch();
    const newCheckoutBillingAddress = useSelector((state)=> state.newCheckoutBillingAddress)
    const newCheckoutAddress = useSelector((state) => state.newCheckoutAddress);
    const customerdetails = useSelector((state) => state.customer_details);
    const [showBillingAddress, setShowBillingAddress] = useState(true);
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [addressValue, setaddressValue] = useState('');
    const [update,setupdate] = useState(false);
    const [cancel,setcancel] = useState(false);
    const [activeIndex, setactiveIndex] = useState(0);
    const [whatIsThis, setwhatIsThis] = useState(false);

    //years
    const years=[];
    for (let i = 1; i <= 11; i++) {
        const date = new Date();
        years.push((date.getFullYear() - 1 + i).toString())
    }

    //Function to update the card details on change of input field
    const updatecreditinfo = ({ target }) => {
        setCreditcardInfo((creditcardInfo) => ({
            ...creditcardInfo,
            [target.name]: target.value,
        }));
    };

    // To get the year and month value on credit card
    useEffect(() => {
        month &&
            year &&
            setCreditcardInfo((creditcardInfo) => ({
                ...creditcardInfo,
                expirationDate: year + "-" + month,
            }));
    }, [year, month]);

    // To identify the country name based on id
    const countryname = countrydata?.find(country=>(
        country?.id === newCheckoutAddress?.country_id ? country?.full_name_english : null
   ))

    //Function to handle the on change event of address select
    const handleAddressChange = ({ target }) => {
        const index = target.options.selectedIndex;
        setaddressValue(target.value);
        if(target.value !== 'newAddress'){
            setactiveIndex(index)
        }else{
            setactiveIndex(null)
        }
    };

    //Initially to set billing address as shipping address
    useEffect(() => {
        if(showBillingAddress){
            dispatch(update_new_checkout_billing_address(newCheckoutAddress))
        }
    }, [showBillingAddress,newCheckoutAddress])

    // Function to update the billing address
    const handleUpdateAddress = ()=>{
        setupdate(true)
        if(addressValue !== 'newAddress'){
            if(customerdetails?.addresses[activeIndex].id === newCheckoutAddress?.id){
                setShowBillingAddress(true)
                dispatch(update_new_checkout_billing_address(newCheckoutAddress))
            }else{
                dispatch(update_new_checkout_billing_address(customerdetails?.addresses[activeIndex]))
            }
        }else{

        }
    }

    // Function to cancel the billing address
    const handleCancel = ()=>{
        setcancel(true);
        if(newCheckoutAddress.id === newCheckoutBillingAddress?.id){
            setShowBillingAddress(true)
            dispatch(update_new_checkout_billing_address(newCheckoutAddress))
        }
    }

    return (
        <div className="border-box payment-method">
            <h2>
                {/* <span className="mark">4</span> */}
                <span className="title">PAYMENT METHOD</span>
            </h2>
            <div className="we_accpect">
                Debit / Credit Card <img src={cards} alt="Cards" />
            </div>
            {/* <div className="card-icons">
                <span>
                    <SiAmericanexpress />
                </span>
                <span>
                    <SiVisa />{" "}
                </span>
                <span>
                    <SiMastercard />{" "}
                </span>
                <span>
                    <FaCcDiscover />{" "}
                </span>
            </div> */}
            <div className="note_content">
                <strong>Please Note:</strong>
                Billing Address must match the exact Billing Address associated
                with the chosen payment method
            </div>
            <div className="input-field align-center">
                <input
                    type="checkbox"
                    name="sameasshipping"
                    id="sameasshipping"
                    checked={showBillingAddress}
                    onChange={() =>{
                        setShowBillingAddress(
                            (showBillingAddress) => !showBillingAddress
                        )
                        setupdate(false)
                        setcancel(false)
                    }}
                    className="custom_check_hiden"
                />
                <label
                    htmlFor="sameasshipping"
                    className="custom_check_box font_variation"
                >
                    My billing and shipping address are the same
                </label>
            </div>
            <div className=""></div>
            {!showBillingAddress && !update && !cancel? (
                <div className='address-dropdown card_input_wrap'>
                    <p>Billing Address</p>
                    <select 
                        className='address-dropdown-select input-field'
                        onChange={(e)=>handleAddressChange(e)}
                        value={addressValue}
                        id='addresses'
                    >
                        {
                            customerdetails?.addresses?.map((address,i)=>{
                                return(
                                <option >  
                                   {
                                       address?.firstname + " " + address?.lastname + ", " +
                                       address?.street?.map(item=>item)+", "+
                                       address?.city+", "+
                                       address?.region?.region+", "+
                                       address?.postcode+", "+
                                       countryname?.full_name_english
                                    // country_id
                                   }
                                </option>
                                )
                            })
                        }
                        <option value='newAddress' >New Address</option>
                    </select>
                    {
                        addressValue === 'newAddress' ? (
                            <Address
                                validateFields={validateFields}
                                setdata={setBillingAddress}
                                address={BillingAddress}
                                paymentMethod={true}
                                checkout_page={true}
                                setupdate={setupdate}
                            />
                        ):null
                    }
                    <div className='address-dropdown-buttons'>
                        {addressValue !== 'newAddress' ? <button className='address-dropdown-buttons-update' onClick={()=>handleUpdateAddress()}>Update</button> : null}
                        <button className={addressValue !== 'newAddress' ? 'address-dropdown-buttons-cancel' : 'new-address-cancel'} onClick={()=>handleCancel()}>Cancel</button>
                    </div>
                </div>
            ) : (
                newCheckoutBillingAddress && showBillingAddress ? (
                    <address className="delivery_address_payment">
                    <span>{newCheckoutBillingAddress?.firstname+" "+newCheckoutBillingAddress?.lastname}</span>
                    <span>
                        {
                            newCheckoutBillingAddress?.street?.map(item=>(
                                <span>{item}</span>
                            ))
                        }
                    </span>
                    <span>
                        {newCheckoutBillingAddress?.city},{" "} 
                        {newCheckoutBillingAddress?.region?.region},{" "} 
                        {newCheckoutBillingAddress?.postcode}
                    </span>
                    <span>
                        {
                            countrydata?.map(country=>(
                                country?.id === newCheckoutBillingAddress?.country_id ? <span>{country?.full_name_english}</span> : null
                            ))
                        }
                    </span>
                    <span>{newCheckoutBillingAddress?.telephone}</span>
                </address>
                ):(
                    
                        newCheckoutBillingAddress ? (
                            <address className="delivery_address_payment">
                                <span>{newCheckoutBillingAddress?.firstname + " "+ newCheckoutBillingAddress?.lastname }</span>
                                <span>
                                    {
                                        newCheckoutBillingAddress?.street?.map(item=>(
                                            <span>{item}</span>
                                        ))
                                    }
                                </span>
                                <span>
                                    {newCheckoutBillingAddress?.city},{" "} 
                                    {newCheckoutBillingAddress?.region?.region},{" "} 
                                    {newCheckoutBillingAddress?.postcode}
                                </span>
                                <span>
                                    {
                                        countrydata?.map(country=>(
                                            country?.id === newCheckoutBillingAddress?.country_id ? <span>{country?.full_name_english}</span> : null
                                        ))
                                    }
                                </span>
                                <span>{newCheckoutBillingAddress?.telephone}</span>
                                <span>
                                    <button 
                                        className='address-edit-button'
                                        onClick={()=>{
                                            setShowBillingAddress(false);
                                            setupdate(false)
                                            setcancel(false)
                                        }}>
                                            Edit
                                    </button>
                                </span>
                            </address>
                        ):(
                            <Skeleton count ={1} width='100%' height='180px'/>
                        )
                ) 
            )}
            {/* <div className="input-field align-center">
                <input type="radio" name="card" id="card" />
                <label htmlFor="card"> Debit / Credit Card</label>
            </div> */}
            <div className="card_input_wrap">
                <div className={`input-field ${validateFields && "validate"}`}>
                    <label htmlFor="email" className="pay_custom_label">
                        Card Number<sup>*</sup>
                    </label>
                    <input
                        onChange={updatecreditinfo}
                        id="cardNumber"
                        name="cardNumber"
                        type="number"
                        required
                    />
                </div>
                <Row>
                    <Col sm={5}>
                        <div className="input-field">
                            <label htmlFor="month" className="pay_custom_label">
                                Month<sup>*</sup>
                            </label>
                            <select
                                onChange={({ target: { value } }) => {
                                    setMonth(value);
                                }}
                                name="month"
                                required
                                className={validateFields && "validate"}
                                id="month"
                            >
                                <option value="">Month</option>
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                            </select>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="input-field">
                            <label htmlFor="year" className="pay_custom_label">
                                Year<sup>*</sup>
                            </label>
                            <select
                                onChange={({ target: { value } }) => {
                                    setYear(value);
                                }}
                                required
                                className={validateFields && "validate"}
                                name="year"
                            >
                                <option value="">Year</option>
                                {
                                    years?.map(year=>(
                                        <option value={year}>
                                            {year}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div
                            className={`input-field ${
                                validateFields && "validate"
                            }`}
                        >
                            <label
                                htmlFor="cardCode"
                                className="pay_custom_label"
                            >
                                CVV<sup>*</sup>
                            </label>
                            <input
                                onChange={updatecreditinfo}
                                id="cardCode"
                                name="cardCode"
                                required
                                type="password"
                            />
                        </div>
                    </Col>
                </Row>
                <button className='what-is-this' onClick={()=>whatIsThis ? setwhatIsThis(false): setwhatIsThis(true)}>
                    What is this
                </button>
            </div>
            {creditcardApproval &&
                (creditcardApproval === "loading" ? (
                    <BsThreeDots />
                ) : (
                    <p
                        className={
                            creditcardApproval === "success"
                                ? "success mt-2"
                                : "error mt-2"
                        }
                    >
                        {creditcardApproval === "success"
                            ? "Card Verified Successfully"
                            : "Card Verification Failed"}
                    </p>
                ))}
                {
                    whatIsThis ? (
                        <div className='what-is-this-image'>
                            <img
                                src='https://www.elementvape.com/pub/static/version1636622530/frontend/Codazon/unlimited_elementvape/en_US/Magento_Checkout/cvv.png'
                                alt='CVV Identification'
                            />
                        </div>
                    ):null
                }
        </div>
    );
}
