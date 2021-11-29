import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    let urllist = [
        {
            url:
                "https://www.elementvape.com/pub/media/slideshow/cache/1380x569/homepage_banners/JOYTECH_FRONT_PAGE2v2.jpg",
        },
        {
            url:
                "https://www.elementvape.com/pub/media/slideshow/cache/1380x569/homepage_banners/Lost_Vape_Grus_EV_Promo.jpg",
        },
        {
            url:
                "https://www.elementvape.com/pub/media/slideshow/cache/1380x569/homepage_banners/Voopoo_Drag_Max_Front_page_Banner.jpg",
        },
        {
            url:
                "https://www.elementvape.com/pub/media/slideshow/cache/1380x569/homepage_banners/Uwell_Caliburn_G_Front_Page_Banner.jpg",
        },
        {
            url:
                "https://www.elementvape.com/pub/media/slideshow/cache/1380x569/homepage_banners/UwellAEGLOS_Front_Page_1_.jpg",
        },
    ];
    return (
        <div className="home-slider">
            {/* <img src={UwellAEGLOS_Front_Page_1_} alt /> */}

            <Carousel
                responsive={responsive}
                itemClass="carousel-item-padding-40-px"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                showDots={true}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}
            >
                {urllist.map((val) => {
                    return (
                        <div className="each-slide">
                            <div
                                style={{
                                    backgroundImage: `url(${val.url})`,
                                    height: "570px",
                                    "background-repeat": "no-repeat",
                                    "background-size": "cover",
                                    "background-position": "top left",
                                }}
                            >
                                <span>Slide 1</span>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
