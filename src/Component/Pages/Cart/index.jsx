import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductListing from "./fragments/productListing";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import countrydata from "./country.json";
import Skeleton from "react-loading-skeleton";
import PopupModal from "../Products/files/popupModal";
import EditCart from "./fragments/editCart";
import CouponCode from "../Checkout/fragment/couponCode";

export default function CartPage() {
    let history = useHistory();
    const [shipping, setShipping] = useState(null);
    const [expande, setExpande] = useState([]);
    const [region, setregion] = useState([]);
    const cart_data = useSelector((state) => state.update_cart);
    const [subTotal, setSubTotal] = useState(0);
    const [open, setOpen] = useState(false);
    const customertoken = useSelector((state) => state.customer_token);
    const coupon = useSelector((state)=>state.coupon);
    const [discountShow, setdiscountShow] = useState(false);

    useEffect(() => {
        cart_data.map(({ price, qty }) => {
            setSubTotal((subTotal) => (subTotal += price * qty));
        });
    }, []);
    const setregionfunc = ({ target }) => {
        let temp = false;
        countrydata.map(({ available_regions = [], id }) => {
            if (id === target.value) {
                available_regions.length && setShipping("fedexflatrate");
                setregion(available_regions);
                temp = true;
            }
        });
        temp && setShipping("freeshipping");
    };

    //condition to check whether the user is logged in to go to checkout page.
    const handleCheckout = ()=>{
        customertoken ? (history.push('/checkout')) : setOpen(true);
    }
    
    //closing the modal
    const onCloseModal = () => {
        setOpen(false);
    };

    return (
        <>
        <div className="cart-page">
            <div className="cus-container">
                {
                cart_data.length ? (
                                    <>
                                    <h2>Shopping Cart</h2> 
                                    <div className="cart-info">
                                    <div className="product-list-items">
                                        <ProductListing cart_data={cart_data}/> 
                                    </div>
                                    <div className="cart-items-summary">
                                                    <h3>SUMMARY</h3>
                                                    <hr />
                                                    <Accordion
                                                        onClick={() =>
                                                            setExpande((expande) =>
                                                                !expande.length ? ["a"] : []
                                                            )
                                                        }
                                                        allowZeroExpanded
                                                        preExpanded={expande}
                                                    >
                                                        <AccordionItem uuid="a">
                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    ESTIMATE SHIPPING AND TAX
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <div className="accordion-data">
                                                                    <div className="estimate">
                                                                        Enter your destination to get a
                                                                        shipping estimate.
                                                                    </div>
                                                                    <div className="DropDown">
                                                                        <span>Country</span>
                                                                        <select
                                                                            onChange={setregionfunc}
                                                                            name="Country"
                                                                            id="Country"
                                                                        >
                                                                            {countrydata.map((country) => {
                                                                                return (
                                                                                    <option
                                                                                        value={country.id}
                                                                                    >
                                                                                        {
                                                                                            country.full_name_english
                                                                                        }
                                                                                    </option>
                                                                                );
                                                                            })}
                                                                        </select>
                                                                    </div>
                                                                    {region.length ? (
                                                                        <div className="DropDown">
                                                                            <label>State/Province</label>
                                                                            <select
                                                                                name="Country"
                                                                                id="Country"
                                                                            >
                                                                                {region.map(
                                                                                    ({ code, name }) => {
                                                                                        return (
                                                                                            <option
                                                                                                value={code}
                                                                                            >
                                                                                                {name}
                                                                                            </option>
                                                                                        );
                                                                                    }
                                                                                )}
                                                                            </select>
                                                                        </div>
                                                                    ) : (
                                                                        <div className="DropDown">
                                                                            <label>State/Province</label>
                                                                            <input type="text" />
                                                                        </div>
                                                                    )}
                                                                    <div className="DropDown">
                                                                        <label>Zip/Postal Code</label>
                                                                        <input type="text" />
                                                                    </div>
                                                                    <div className="shipping-option">
                                                                        {!region.length ? (
                                                                            <div>
                                                                                <strong>
                                                                                    International Shipping
                                                                                </strong>
                                                                                <div>
                                                                                    <input
                                                                                        name="shipping-method"
                                                                                        id="usps"
                                                                                        type="radio"
                                                                                        value="USPS"
                                                                                        checked={
                                                                                            shipping ===
                                                                                            "freeshipping"
                                                                                                ? true
                                                                                                : false
                                                                                        }
                                                                                        onClick={(e) => {
                                                                                            e.target.checked
                                                                                                ? setShipping(
                                                                                                    "freeshipping"
                                                                                                )
                                                                                                : setShipping(
                                                                                                    null
                                                                                                );
                                                                                        }}
                                                                                    />
                                                                                    <label htmlFor="usps">
                                                                                        International Padded
                                                                                        Package $30.00
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        ) : (
                                                                            <>
                                                                                <div>
                                                                                    <strong>
                                                                                        FedEx Express
                                                                                        Shipping (2-5
                                                                                        business days)
                                                                                    </strong>
                                                                                    <div>
                                                                                        <input
                                                                                            name="shipping-method"
                                                                                            onClick={(
                                                                                                e
                                                                                            ) => {
                                                                                                e.target
                                                                                                    .checked
                                                                                                    ? setShipping(
                                                                                                        "fedexflatrate"
                                                                                                    )
                                                                                                    : setShipping(
                                                                                                        null
                                                                                                    );
                                                                                            }}
                                                                                            checked={
                                                                                                shipping ===
                                                                                                "fedexflatrate"
                                                                                                    ? true
                                                                                                    : false
                                                                                            }
                                                                                            id="fedex"
                                                                                            value="fedexflatrate"
                                                                                            type="radio"
                                                                                        />
                                                                                        <label htmlFor="fedex">
                                                                                            Priority Pak
                                                                                            $15.00
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <strong>
                                                                                        USPS Priority
                                                                                        Shipping (3-8
                                                                                        business days)
                                                                                    </strong>
                                                                                    <div>
                                                                                        <input
                                                                                            name="shipping-method"
                                                                                            id="usps"
                                                                                            type="radio"
                                                                                            value="USPS"
                                                                                            onClick={(
                                                                                                e
                                                                                            ) => {
                                                                                                e.target
                                                                                                    .checked
                                                                                                    ? setShipping(
                                                                                                        "USPS"
                                                                                                    )
                                                                                                    : setShipping(
                                                                                                        null
                                                                                                    );
                                                                                            }}
                                                                                        />
                                                                                        <label htmlFor="usps">
                                                                                            Priority Padded
                                                                                            Mail $8.00
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </AccordionItemPanel>
                                                        </AccordionItem>
                                                    </Accordion>
                                                    <hr />
                                                    <div className="summary">
                                                        <div>
                                                            <span>Subtotal</span>
                                                            <span>${subTotal.toFixed(2)}</span>
                                                        </div>
                                                        <div>
                                                            <span>Adult Signature Fee</span>
                                                            <span>$5.00</span>
                                                        </div>
                                                        {
                                                            coupon && discountShow ? (
                                                                <div>
                                                                    <span>{coupon}</span>
                                                                    <span>-$7.00</span>
                                                                </div>
                                                            ):null
                                                        }
                                                        {/* <div>
                                                            <span>
                                                                {shipping ? (
                                                                    shipping === "freeshipping" ? (
                                                                        " International Padded Package"
                                                                    ) : shipping === "fedexflatrate" ? (
                                                                        " Shipping (FedEx Express Shipping (2-5 business days) - Padded Pak)"
                                                                    ) : (
                                                                        "USPS Priority Shipping (3-8 business days)"
                                                                    )
                                                                ) : (
                                                                    <Skeleton width={150} />
                                                                )}
                                                            </span>
                                                            <span>
                                                                {shipping ? (
                                                                    shipping === "freeshipping" ? (
                                                                        "$30.00"
                                                                    ) : shipping === "fedexflatrate" ? (
                                                                        "$8.00"
                                                                    ) : (
                                                                        "$15.00"
                                                                    )
                                                                ) : (
                                                                    <Skeleton width={70} />
                                                                )}
                                                            </span>
                                                        </div> */}
                                                        {
                                                            coupon ? (
                                                                <div className='discount-row'>
                                                                    <span>
                                                                        <span>Discount {coupon}</span>
                                                                       
                                                                        <span onClick={()=>{
                                                                            discountShow === false ? setdiscountShow(true) : setdiscountShow(false)
                                                                        }}>
                                                                            {discountShow ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
                                                                        </span>
                                                                    </span>
                                                                    <span>-$7.00</span>
                                                                </div>
                                                            ):null
                                                        }
                                                        <div>
                                                            <span>Order Total</span>
                                                            <span>
                                                                {shipping
                                                                    ? shipping === "freeshipping"
                                                                        ? "$" + (subTotal + 35).toFixed(2)
                                                                        : shipping === "fedexflatrate"
                                                                        ? "$" + (subTotal + 13).toFixed(2)
                                                                        : "$" + (subTotal + 20).toFixed(2)
                                                                    : (subTotal + 5).toFixed(2)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <Accordion
                                                        onClick={() =>
                                                            setExpande((expande) =>
                                                                !expande.length ? ["a"] : []
                                                            )
                                                        }
                                                        allowZeroExpanded
                                                        preExpanded={expande}
                                                    >
                                                        <AccordionItem uuid="a">
                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    APPLY DISCOUNT CODE
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <div className="accordion-data">
                                                                    <div>
                                                                        {/* <label>
                                                                            Enter discount code
                                                                        </label>
                                                                        <input 
                                                                            placeholder='Enter discount code'
                                                                            type='text'
                                                                            className='discount-input'
                                                                        />
                                                                        <button className="cart-btn discount-btn">
                                                                            APPLY DISCOUNT
                                                                        </button> */}
                                                                        <CouponCode/>
                                                                    </div>
                                                                </div>
                                                            </AccordionItemPanel>
                                                        </AccordionItem>
                                                    </Accordion>
                                                    <button
                                                        onClick={() => {
                                                            handleCheckout();
                                                        }}
                                                        className="cart-btn checkout-btn"
                                                    >
                                                        Proceed to Checkout
                                                    </button>
                                        </div>                                      
                                    </div>
                                    </>
                ) : (
                    <div className='no-items'>
                        <h2>Shopping Cart</h2> 
                        <p>You have no items in your shopping cart.</p>
                        <p>Click <Link to='/' className='no-items-link'>here </Link> to continue shopping.</p>
                    </div>
                )}
                </div>    
        </div>
        {!customertoken && open &&(
            <div>
                <PopupModal
                    onCloseModal={onCloseModal}
                    open={open}
                    setOpen={setOpen}
                    error='loginPopup'
                />
            </div>
        )}
        </>
    );
}
