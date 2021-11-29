import React, { useEffect, useState } from "react";
import Axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import shipping2 from "../../../../image/shipping2.jpg";

export default function FeatureBrands() {
    const [featureBrands, setfeatureBrands] = useState([]);
    const [loading, setloading] = useState(false);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1220 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1220, min: 768 },
            items: 4,
        },
        lgmobile: {
            breakpoint: { max: 768, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    useEffect(() => {
        setloading(true);
        Axios.get(process.env.REACT_APP_MAGENTO_URI+"get_home_feature_brands")
            .then((res) => {
                if (res.data) {
                    let response = res.data;
                    console.log(res.data)
                    setfeatureBrands(
                        response.sort((a, b) =>
                            a.position > b.position ? 1 : -1
                        )
                    );
                    setloading(false);
                }
            })
            .catch((err) => {
                console.log(err.response);
                setloading(false);
            });
    }, []);
   
    return (
        <section  className="feature_brand_sec">
            <div className="cus-container">
                <div className="brands">
                    <h3 className="margin_none">FEATURED BRANDS</h3>
                </div>
                <div className="feature_brand_wrap">
                    <Carousel
                        responsive={responsive}
                        itemClass="carousel-item-padding-40-px"
                        showDots={false}
                        autoPlay={false}
                        infinite={false}
                        autoPlaySpeed={3000}
                    >
                        {featureBrands &&
                            featureBrands
                                .slice(0, Math.round(featureBrands.length / 2))
                                .map((brand, index) => {
                                    return (
                                        <div
                                            className="slide_wrap"
                                            key={brand.brandId}
                                        >
                                            <Link
                                                to={
                                                    new URL(
                                                        featureBrands[index * 2].url
                                                    ).pathname
                                                }
                                                title={
                                                    featureBrands[index * 2].label
                                                }
                                            >
                                                <img
                                                    src={
                                                        featureBrands[index * 2].img
                                                    }
                                                    alt=""
                                                />
                                            </Link>
                                            {featureBrands[index * 2 + 1] && (
                                                <Link
                                                    to={
                                                        new URL(
                                                            featureBrands[
                                                                index * 2 + 1
                                                            ].url
                                                        ).pathname
                                                    }
                                                    title={
                                                        featureBrands[index * 2 + 1]
                                                            .label
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            featureBrands[
                                                                index * 2 + 1
                                                            ].img
                                                        }
                                                        alt=""
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                    );
                                })}
                    </Carousel>
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
        </section>
    );
}
