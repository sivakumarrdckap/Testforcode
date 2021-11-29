import React from "react";
import shipping2 from "../../../../image/shipping2.jpg";

export default function FeatureBrands() {
    return (
        <>
            <div className="cus-container">
                <div className="brands">
                    <h3>FEATURED BRANDS</h3>
                </div>
            </div>
            <div className="cus-container offer-coupons">
                <div className="space-lg">
                    <div className="row">
                        <div className="col-sm-3 mobile-align">
                            <div className="banner-style02">
                                <div className="cdz-banner">
                                    <a title="Your title" href="#" alt>
                                        <img src={shipping2} alt />
                                    </a>
                                    <div className="coupon-text">
                                        <h2>
                                            Free Shipping
                                            <br /> Over $75
                                        </h2>
                                        <a
                                            className="button-link slide-btn hidden-xs btn-lignt"
                                            href="#shipping-and-handling"
                                            alt="Learn More"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mobile-align">
                            <div className="banner-style02">
                                <div className="cdz-banner">
                                    <a title="Your title" href="#" alt>
                                        <img src={shipping2} alt />
                                    </a>
                                    <div className="coupon-text">
                                        <h2>
                                            Become a<br />
                                            VIP
                                        </h2>
                                        <a
                                            className="button-link slide-btn hidden-xs btn-lignt"
                                            href="#shipping-and-handling"
                                            alt="Learn More"
                                        >
                                            Join now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mobile-align">
                            <div className="banner-style02">
                                <div className="cdz-banner">
                                    <a title="Your title" href="#" alt>
                                        <img src={shipping2} alt />
                                    </a>
                                    <div className="coupon-text">
                                        <h2>Clearance</h2>
                                        <a
                                            className="button-link slide-btn hidden-xs btn-lignt"
                                            href="#shipping-and-handling"
                                            alt="Learn More"
                                        >
                                            shop now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mobile-align">
                            <div className="banner-style02">
                                <div className="cdz-banner">
                                    <a title="Your title" href="#" alt>
                                        <img src={shipping2} alt />
                                    </a>
                                    <div className="coupon-text">
                                        <h2>Weekly Coupons</h2>
                                        <a
                                            className="button-link slide-btn hidden-xs btn-lignt"
                                            href="#shipping-and-handling"
                                            alt="Learn More"
                                        >
                                            shop now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
