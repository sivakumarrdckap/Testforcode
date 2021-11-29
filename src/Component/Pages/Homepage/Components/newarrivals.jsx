import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PopupModal from "../../Products/files/popupModal";
import { GetYotpoData } from "../../../Common/ReviewData";

export default function NewArrivals({ bestSeller }) {
    const [newArrivals, setNewArrivals] = useState([]);
    const [loading, setloading] = useState(false);
    const [open, setOpen] = useState(false);
    const [arrivalData, setArrivalData] = useState(null);
    const [star, setStar] = useState(0);

    const onCloseModal = () => {
        setOpen(false);
    };

    useEffect(() => {
        let stars = [];
        newArrivals.map(({ product_id }) => {
            console.log({ product_id });
            GetYotpoData(
                () => {},
                (e) => {
                    console.log({ Yatpo: e });
                    stars.push(e.bottomline.average_score);
                },
                product_id
            );
        });

        setStar(stars);
    }, []);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1250 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 1250, min: 999 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 999, min: 768 },
            items: 3,
        },
        largemobile: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    useEffect(() => {
        setloading(true);
        Axios.get(
            process.env.REACT_APP_MAGENTO_URI +
                (bestSeller ? "get_best_sellers" : "get_new_arrivals")
        )
            .then(({ data, status }) => {
                if (status === 200) {
                    setNewArrivals(data);
                    setloading(false);
                    console.log(data);
                }
            })
            .catch((err) => {
                console.log(err.response);
                setloading(false);
            });
    }, []);
    return (
        <>
            {newArrivals && (
                <section className="new_arivals">
                    <div className="cus-container">
                        <div className="section_title">
                            {bestSeller ? "Best Sellers" : "New Arrivals"}
                        </div>
                        <Carousel
                            responsive={responsive}
                            itemClass="carousel-item-padding-40-px"
                            showDots={false}
                            autoPlay={false}
                            infinite={true}
                            autoPlaySpeed={3000}
                        >
                            {newArrivals.map((arrivals) => {
                                return (
                                    <div
                                        className="overal_wrapper_arrival"
                                        key={arrivals.product_id}
                                    >
                                        <span className="new_tag">New</span>
                                        <div className="top_image_wrapper">
                                            <img
                                                src={
                                                    "https://www.elementvape.com/pub/media/catalog/product" +
                                                    arrivals.image
                                                }
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src =
                                                        "https://media-exp1.licdn.com/dms/image/C4E0BAQGCxDCu0bp79g/company-logo_200_200/0/1551996792494?e=2159024400&v=beta&t=HqzCn3HBlKheQkOfGWr1puewT-VLyaufAEKo0frBh8Q";
                                                }}
                                                alt="product-img"
                                            />
                                            <button
                                                onClick={() => {
                                                    setArrivalData({
                                                        url_key: arrivals.url,
                                                        name: arrivals.name,
                                                        image: arrivals.image,
                                                        prod_id:
                                                            arrivals.product_id,
                                                        price: arrivals.price,
                                                    });
                                                    setOpen(true);
                                                }}
                                                className="quick_view_btn"
                                            >
                                                Quick View
                                            </button>
                                        </div>
                                        <div className="bottom_wraper_arrivals">
                                            <Link
                                                to={
                                                    new URL(arrivals.url)
                                                        .pathname
                                                }
                                                className="product_title_arriaval"
                                            >
                                                {arrivals.name}
                                            </Link>
                                            <div className="product_price">
                                                <span className="on_price">
                                                    $ {parseFloat(
                                                        arrivals.special_price
                                                    )?.toFixed(2)}
                                                </span>
                                                <span className="old_price">
                                                    $ {parseFloat(
                                                        arrivals.price
                                                    )?.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </section>
            )}
            {loading && (
                <div className="row">
                    <Skeleton width={"100%"} height={300} count={1} />
                </div>
            )}

            {arrivalData && open && (
                <PopupModal
                    product={arrivalData}
                    onCloseModal={onCloseModal}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </>
    );
}
