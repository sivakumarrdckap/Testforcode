import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PopupModal from "../../Products/files/popupModal";
import { GetYotpoData } from "../../../Common/ReviewData";

export default function Trending() {
    const [trending, setTrending] = useState();
    const [title, setTitle] = useState();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [trendingData, settrendingData] = useState(null);
    const [star, setStar] = useState(0);
    const onCloseModal = () => {
        setOpen(false);
    };
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
        setLoading(true);
        Axios.post("https://commerce.adobe.io/recs/v1/precs/preconfigured", 
            {
                "environmentId": "850d25a7-ddac-4cf8-9723-4a11e721b8f6",
                "alternateEnvironmentId": "",
                "storeCode": "main_website_store",
                "storeViewCode": "default",
                "websiteCode": "base",
                "pageType": "CMS",
                "category": "",
                "currentSku": "",
                "cartSkus": [],
                "userViewHistorySkus": [],
                "userViewHistory": [],
                "userPurchaseHistory": [],
                "defaultStoreViewCode": "",
                "customerGroupCode": ""
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "8b25de7a29e846b2a956ba146720090c"
                },
            })
            .then(({status , data}) => {
                if(status === 200){
                    setTrending(data.results[0].products)
                    setTitle(data.results[0].storefrontLabel)
                    setLoading(false);
                }
            }).catch((err)=>{
                setLoading(false);
                console.log(err.message)
            })
    }, []);
    return (
        <>
            {trending && (
                <section className="new_arivals trending_sec">
                    <div className="cus-container">
                        <div className="section_title">{title}</div>
                        <Carousel
                        responsive={responsive}
                        itemClass="carousel-item-padding-40-px"
                        showDots={false}
                        autoPlay={false}
                        infinite={true}
                        autoPlaySpeed={3000}
                    >
                        {trending.map((trendData) => {
                            return (
                                <div
                                    className="overal_wrapper_arrival"
                                    key={trendData.productId}
                                >
                                    <div className="top_image_wrapper">
                                        <img
                                            src={trendData.image.url}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                    "https://media-exp1.licdn.com/dms/image/C4E0BAQGCxDCu0bp79g/company-logo_200_200/0/1551996792494?e=2159024400&v=beta&t=HqzCn3HBlKheQkOfGWr1puewT-VLyaufAEKo0frBh8Q";
                                            }}
                                            alt={trendData.image.label}
                                        />
                                        <button 
                                            onClick={() => {
                                                settrendingData({
                                                    url_key: trendData.url.replaceAll("//www.elementvape.com/" , ""),
                                                    name: trendData.name,
                                                    image: trendData.image.url.replaceAll("//www.elementvape.com/pub/media/catalog/product" , ""),
                                                    prod_id: trendData.productId,
                                                    price: trendData.prices.maximum.final,
                                                    sku: trendData.sku
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
                                            to={'/'+trendData.url.replaceAll("//www.elementvape.com/" , "")}
                                            className="product_title_arriaval"
                                        >
                                            {trendData.name}
                                        </Link>
                                         <div className="product_price">
                                            <span className="on_price">
                                                $ {parseFloat(
                                                    trendData.prices.maximum.final
                                                )?.toFixed(2)}
                                            </span>
                                            {/*<span className="old_price">
                                                $ {parseFloat(
                                                    trendData.price
                                                )?.toFixed(2)}
                                            </span>*/}
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

            {trendingData && open && (
                <PopupModal
                    product={trendingData}
                    onCloseModal={onCloseModal}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </>
    );
}
