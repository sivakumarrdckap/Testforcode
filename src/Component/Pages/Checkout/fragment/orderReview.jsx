import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import CouponCode from "./couponCode";
import Reward from "./rewards";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";

export default function OrderReview({
    cart_data,
    shippingDetails,
    adultSignature,
    cartid,
    loginUserToken,
    magentouserid,
    reformataddress,
    shippingAddress,
    settotalData
}) {
    const checkoutDetails = useSelector((state) => state.checkoutItem);
    const [displayInfo, setDisplayInfo] = useState(false);
    const [rewardInfo, setrewardInfo] = useState(false);
    const [shippinginfo, setshippinginfo] = useState(false);
    const [Adultssign, setAdultssign] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rewords, setRewords] = useState(null);
    const [maximumRewardpoints, setMaximumRewardpoints] = useState(null);
    const [rewordsLoading, setRewordsLoading] = useState(false);
    const [summaryData, setSummaryData] = useState(null);
    const [couponInfo, setcouponInfo] = useState(false);
    const coupon = useSelector((state) => state.coupon);
    const [checkoutItemsData, setCheckoutItemsData] = useState({});

    useEffect(() => {
        setLoading(true)
        
        cart_data.map(({ sku }) => {
            const needSku  = sku?.split('-')[0];
            console.log("s" , needSku)
            axios.get("https://headlessdev.elementvape.com/api/imageFromSku/"+`${needSku}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            ).then((res) => {
                if (res.status === 200) {
                    setCheckoutItemsData((checkoutItemsData) => ({
                        ...checkoutItemsData,
                        [sku]: res.data
                    }));
                    setLoading(false)
                }
            })
            .catch((err) => {
                Swal.fire("Oops!",err?.response?.data?.message? err.response.data.message : err.message, "error");
                setLoading(false)
            });
        });
    }, [cart_data])
   

    // client side calculation

    // const [storeCredit, setStoreCredit] = useState(null);
    // const [salesTax, setSalesTax] = useState(null);
    // const [total, setTotal] = useState(null);
    // const [couponDiscount, setCouponDiscount] = useState(null);
        // const [couponDiscount, setCouponDiscount] = useState(null);
    //let subTotal = 0;
    //let yeanRewards={"productInfo" : []}
    // if(cart_data && magentouserid){
    //     cart_data.map(({ price, qty , sku }) => {
    //         subTotal += price * qty;
    //         let singlePriductInfo = {
    //             "sku": sku,
    //             "price": price,
    //             "customer_id": magentouserid,
    //             "website_id": 1,
    //             "tier_id": 1
    //         }
    //         yeanRewards.productInfo.push(singlePriductInfo)
    //     });
    // }
    // const viewMore = (e) => {
    //     let current = e.target
    //     let idFinder = current.getAttribute("data-toggle")
    //     if(idFinder){
    //         if(current.innerHTML === "View Less") {
    //             current.innerHTML = "View More";
    //         }else {
    //             current.innerHTML = "View Less";
    //         }
    //         current.classList.toggle("active");
    //         document.getElementById(idFinder).classList.toggle("active");
    //     }
    // };
    // useEffect(() => {
    //     setLoading(true)
    //     axios.post(process.env.REACT_APP_MAGENTO_URI+"rewards/products/points/multiplicity",yeanRewards,
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization:"Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
    //         }
    //     }
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             console.log(res.data)
    //             setLoading(false);
    //         }
    //     })
    //     .catch((err) => {
    //         Swal.fire("Oops!",err?.response?.data?.message? err.response.data.message : err.message, "error");
    //         setLoading(false)
    //     });
    // }, [cart_data , magentouserid])
    // useEffect(() => {
    //     let calcTotal = 0; 
    //     calcTotal = subTotal  - (rewords?(Math.floor(rewords) / 100):0) - (storeCredit?Math.floor(storeCredit):0) + (adultSignature?Math.floor(adultSignature):0) + (shippingDetails?Math.floor(shippingDetails.amount):0) + (couponDiscount?couponDiscount:0) + (salesTax?salesTax:0)
    //     setTotal(calcTotal.toFixed(2));
    // }, [rewords, storeCredit, Adultssign, subTotal, shippingDetails, couponDiscount, salesTax])


    //Store Credit
    // useEffect(() => {
    //     setLoading(true)
    //     axios.get(process.env.REACT_APP_MAGENTO_URI+"customers/me/amstorecredit",
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: "Bearer " + loginUserToken,
    //         }
    //     }
    //     ).then((res) => {
    //         if (res.status === 200) {
    //             setStoreCredit(res.data.store_credit)
    //             setLoading(false);
    //         }
    //     })
    //     .catch((err) => {
    //         Swal.fire("Oops!","Something went wrong please try again later.", "error");
    //         setLoading(false)
    //     });
    // }, [loginUserToken]);



    useEffect(() => {
        if(magentouserid){
            setRewordsLoading(true)
            axios.get(process.env.REACT_APP_MAGENTO_URI+"rewards/balances/"+`${magentouserid}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:"Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
                }
            }
            ).then((res) => {
                if (res.status === 200) {
                    setMaximumRewardpoints(res.data)
                    setRewordsLoading(false);
                }
            })
            .catch((err) => {
                Swal.fire("Oops!",err?.response?.data?.message? err.response.data.message : err.message, "error");
                setRewordsLoading(false)
            });
        }
    }, [magentouserid , rewords])

    let bodyInfo = reformataddress(shippingAddress)
    useEffect(() => {
        setLoading(true)
        if(bodyInfo && Object.keys(shippingAddress).length && shippingDetails){
            const {postcode , region_id , country_id ,region} = bodyInfo;
            let body = {
                "addressInformation":
                {
                    "address":{
                        "countryId": country_id,
                        "region": region,
                        "regionId": region_id,
                        "postcode": postcode
                    },
                    "shipping_method_code": shippingDetails.method_code,
                    "shipping_carrier_code": shippingDetails.carrier_code,
                }
            }  
            axios.post(process.env.REACT_APP_MAGENTO_URI+"carts/mine/totals-information",body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:"Bearer " + loginUserToken,
                }
            }
            ).then((res) => {
                if (res.status === 200) {
                    setSummaryData(res.data)
                    settotalData(res.data);
                    setcouponInfo(false)
                    setLoading(false);
                }
            })
            .catch((err) => {
                setLoading(false)
            });
        }
    }, [shippingAddress,shippingDetails,rewords,couponInfo])


    // Summary Details
        const rewardsTotal = summaryData && summaryData?.total_segments?.find(item=>(
            item?.code === 'rewards-total'
        ))
    
        const adultSignatureFee = summaryData?.total_segments?.find(item=>(
            item.code === 'adult_signature_fee'
        ))
    
        const rewardsSpend = summaryData && summaryData?.total_segments?.find(item=>(
            item.code === 'rewards-spend'
        ))
    
        const rewardsSpendAmount = summaryData?.total_segments?.find(item=>(
            item.code === 'rewards-spend-amount'
        ))
    
        const storeCredit = summaryData?.total_segments?.find(item=>(
            item.code === 'amstorecredit_max'
        ))   
        const weeTAx = summaryData?.total_segments?.find(item=>(
            item.code === 'weee_tax'
        ))  


    return (
        <>
            <div className={`border-box ${loading ? "shipment_load" : null}`}>
                <h2><span className="title">Order summery </span>{loading ? <i class="fas fa-spinner fa-spin m-l-auto"></i> : null}</h2>
                <span className="small_notes">
                    Please Review your items before placing your order
                </span>
                <div onClick={() => setDisplayInfo((displayInfo) => !displayInfo)} className="show-cart-item">
                    <span>
                        {cart_data && cart_data?.length} Item
                        <Link to="/cartpage" className="edit_cart">
                            Edit Cart
                        </Link>
                    </span>
                    <i className="fas fa-chevron-circle-down"></i>
                </div>
                {displayInfo ? (

                    <ul className="checkout_list">
                        {cart_data && cart_data.map((itemsList , k) => {
                            return(
                                <li >
                                    {console.log(itemsList)}
                                    <img  className="checkout_list_image"
                                        src={"https://www.elementvape.com/pub/media/catalog/product/"+checkoutItemsData[itemsList.sku]}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                "https://media-exp1.licdn.com/dms/image/C4E0BAQGCxDCu0bp79g/company-logo_200_200/0/1551996792494?e=2159024400&v=beta&t=HqzCn3HBlKheQkOfGWr1puewT-VLyaufAEKo0frBh8Q";
                                        }}
                                    />
                                   
                                    <div className="checkout_list_desc">
                                        <div className="checkout_list_desc_title">{itemsList.name}</div>
                                        <div className="checkout_list_desc_quantity">Qty: {itemsList.qty}</div>
                                        {/* <div className="checkout_list_desc_more">
                                            <div className="checkout_list_desc_more_list" id="jack">
                                                <div className="checkout_list_desc_more_list_con">Color: Velvet Blue</div>
                                                <div className="checkout_list_desc_more_list_con">Strength: 3mg</div>
                                            </div>
                                            <div className="checkout_list_desc_more_open" data-toggle="jack" onClick={(e) => viewMore(e)}>View More</div> 
                                        </div> */}
                                    </div>
                                    <div className="checkout_list_price">$ {itemsList.price.toFixed(2)}</div>
                                </li>
                            )
                        })}
                    </ul>
                ) : null}
                <div className="checkout_taly_wrap">
                    <div className="cart-subtotal">
                        <span>Cart Subtotal</span>
                        <span className="price">{summaryData ? `${"$ " +summaryData.subtotal}` : "$ 0.00"}</span>
                    </div>
                    {storeCredit?.value?
                    <div className="cart-subtotal">
                        <span>Store Credit</span>
                        <span className="price green_indication"> - $ {storeCredit?.value}</span>
                    </div>: null
                    }
                    {
                        rewardsTotal?.value > 0 ? (
                            <div className="cart-subtotal">
                                <span>You Earn</span>
                                <span className="price green_indication">
                                    { rewardsTotal ? rewardsTotal?.value : 0} 
                                    {" "}
                                    Reward Points
                                </span>
                            </div>
                        ):null
                    }
                    
                    <div className="cart-subtotal adult_sign">
                        <span>
                            Adult Signature Fee
                            <i
                                onClick={() => {
                                    setshippinginfo(false);
                                    setAdultssign(!Adultssign);
                                }}
                                className="far fa-question-circle"
                            ></i>
                            {Adultssign ? (
                                <div className="drop_down_new">
                                    All orders will require Adult Signature
                                    Service. See Help Center for more details
                                </div>
                            ) : null}
                        </span>
                        <span className="price">$ {adultSignatureFee ? adultSignatureFee?.value?.toFixed(2) : 0}</span>
                    </div>
                    {shippingDetails ?(
                            <div className="shipping-total shipping_info">
                            <span>
                                Shipping
                                <i
                                    onClick={() => {
                                        setshippinginfo(!shippinginfo);
                                        setAdultssign(false);
                                    }}
                                    className="far fa-info-circle"
                                ></i>
                                {shippinginfo ? (
                                    <div className="drop_down_new">{shippingDetails.carrier_title}</div>
                                ) : null}
                            </span>
                            <span className="price">$ {shippingDetails.amount.toFixed(2)}</span>
                        </div>
                    ):null
                    }
                    
                    {rewardsSpend?.value > 0  && 
                        <>
                            <div className="shipping-total shipping_info">
                                <span>You Spend</span>
                                <span className="price">{rewardsSpend?.value} Reward Points</span>
                            </div>
                            <div className="shipping-total shipping_info">
                                <span>Rewards Discount</span>
                                <span className="price discount-price">-$ {rewardsSpendAmount?.value.toString().replace('-','')}</span>
                            </div>
                        </>
                    }
                    {weeTAx?.value > 0  && 
                        <>
                            <div className="shipping-total shipping_info">
                                <span>Excise Tax</span>
                                <span className="price">$ {weeTAx?.value}</span>
                            </div>
                        </>
                    }
                
                    <div className="cart-subtotal">
                        <span>Sales and Shipping Tax</span>
                        <span className="price">$ {summaryData ? summaryData?.base_tax_amount.toFixed(2) : "0.00"}</span>
                    </div>
                    
                    {summaryData?.discount_amount ? (
                            <div className="cart-subtotal">
                                <span>Discount {coupon}</span>
                                <span className="price discount-price">-$ {summaryData?.discount_amount.toString().replace('-','')}</span>
                            </div>
                        ):null
                    }

                    <div className="order-total-content">
                        <h3>Order Total</h3>
                        <div className="order-total">$ {summaryData ? summaryData?.base_grand_total.toFixed(2) : "0.00"}</div>
                    </div>
                </div>
                <div className="apply_cupon_intial_wrap">
                    <CouponCode 
                    setcouponInfo={setcouponInfo}
                    />
                </div>
                <div className={`rewards_wrap_loader ${rewordsLoading ? "rewordsLoader" : null}`}>
                    <button className="reward_wrap"onClick={() => setrewardInfo(!rewardInfo)}>
                        Apply Reward Points <i className="fas fa-chevron-down"></i>
                    </button>
                    {rewardInfo ? (
                        <Reward 
                            cartid={cartid}
                            setRewords={setRewords}
                            rewords={rewords}
                            setRewordsLoading={setRewordsLoading}
                            setMaximumRewardpoints={setMaximumRewardpoints}
                            maximumRewardpoints={maximumRewardpoints}
                        />
                    ) : null}
                    {rewordsLoading ? <i class="fas fa-spinner fa-spin center_loader"></i> : null}
                 </div>
            </div>
        </>
    );
}
