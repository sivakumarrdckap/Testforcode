import React, { useEffect, useState } from "react";
import Axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import PopupModal from "../../Products/files/popupModal";
import Skeleton from "react-loading-skeleton";

export default function RelatedProducts({productSku , customerwhobought}) {
    const [loading, setLoading] = useState(false);
    const [productdata, setproductdata] = useState([]);
    const [CategorieTitle, setCategorieTitle] = useState();
    const [modalData, setModalData] = useState(null);
    const [open, setOpen] = useState(false);
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
    const onCloseModal = () => {
        setOpen(false);
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
                "pageType": "Product",
                "category": "",
                "currentSku": productSku
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "8b25de7a29e846b2a956ba146720090c"
                },
            })
            .then(({status , data}) => {
                if(status === 200){
                    console.log(data.results)
                    data.results.map((productCategorie) =>{
                       if(productCategorie.storefrontLabel === "Related Products"){
                            setproductdata(productCategorie.products)
                            setCategorieTitle(productCategorie.storefrontLabel)
                       }
                       else if(productCategorie.storefrontLabel === "Customers who bought this item also bought" && customerwhobought){
                        setproductdata(productCategorie.products)
                        setCategorieTitle(productCategorie.storefrontLabel)
                       }
                    })
                    setLoading(false);
                }
            }).catch((err)=>{
                setLoading(false);
                console.log(err.message)
            })
    }, [productSku]);
        

    return (
        <>
       {productdata.length ? (
            <section className={customerwhobought ? "related_product_sec" : "related_product_sec border-none"}>
                <div className="cus-container">
                    <div className="section_title">{CategorieTitle}</div>
                    <Carousel
                        responsive={responsive}
                        itemClass="carousel-item-padding-40-px"
                        showDots={false}
                        autoPlay={false}
                        infinite={true}
                        autoPlaySpeed={3000}
                    >
                        {productdata.map((details) => {
                            return (
                                <div
                                    className="overal_wrapper"
                                    key={details.productId}
                                >
                                    <div className="top_image_wrapper">
                                        <img
                                            src={details.image.url}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                    "https://media-exp1.licdn.com/dms/image/C4E0BAQGCxDCu0bp79g/company-logo_200_200/0/1551996792494?e=2159024400&v=beta&t=HqzCn3HBlKheQkOfGWr1puewT-VLyaufAEKo0frBh8Q";
                                            }}
                                            alt={details.image.label}
                                        />
                                        <button
                                            onClick={() => {
                                                setModalData({
                                                    url_key: details.url.replaceAll("//www.elementvape.com/" , ""),
                                                    name: details.name,
                                                    image: details.image.url.replaceAll("//www.elementvape.com/pub/media/catalog/product" , ""),
                                                    prod_id: details.productId,
                                                    price: details.prices.maximum.final,
                                                    sku: details.sku
                                                });
                                                setOpen(true);
                                                console.log(details.url)
                                            }}
                                            className="quick_view_btn"
                                        >
                                            Quick View
                                        </button>
                                    </div>
                                    <div className="bottom_wraper_details">
                                        <Link
                                            to={details.url}
                                            className="product_title"
                                        >
                                            {details.name}
                                        </Link>
                                         <div className="product_price">
                                            <span className="on_price">
                                                $ {parseFloat(
                                                    details.prices.maximum.final
                                                )?.toFixed(2)}
                                            </span>
                                            {/*<span className="old_price">
                                                $ {parseFloat(
                                                    details.price
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
        ):null}

        {loading && (
            <div className="row">
                <Skeleton width={"100%"} height={300} count={1} />
            </div>
        )}
        {modalData && open && (
            <PopupModal
                product={modalData}
                onCloseModal={onCloseModal}
                open={open}
                setOpen={setOpen}
            />
        )}
    </>
    );
}
