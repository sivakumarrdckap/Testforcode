import React, { Suspense } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const EachProd = React.lazy(() => import("./eachProd"));

export default function MultiSlider({ title, list }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };
    !list &&
        (list = [6091, 6091, 6091, 6091, 6091, 6091, 6091, 6091, 6091, 6091]);
    return (
        <div className="product-slider">
            <div className="cus-container space-lg">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="product-slider-title">
                            <h3>{title}</h3>
                        </div>
                        <div className="product-slider-content">
                            <Carousel
                                responsive={responsive}
                                itemclassName="carousel-item-padding-40-px"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                showDots={false}
                            >
                                {list.map((id) => {
                                    return (
                                        <Suspense fallback={<div></div>}>
                                            <EachProd id={id} />
                                        </Suspense>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
