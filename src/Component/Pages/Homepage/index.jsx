import React from "react";
import Slider from "./Components/slider";
import BestVape from "./Components/BestVape";
import StarterKit from "./Components/StarterKit";
import FeatureBrands from "./Components/FeatureBrands";
import NewArrivals from "./Components/newarrivals";
import HomepageInstagram from "./Components/homepageInstagram";
import Trending from "./Components/trending";

export default function HomePage() {
    return (
        <>
            <div className="page-main">
                <div className="cus-container">
                    <Slider />
                </div>
                <BestVape />
                <Trending />
                <NewArrivals />
                <StarterKit />
                <NewArrivals bestSeller />
                <FeatureBrands />
                <HomepageInstagram />
            </div>
        </>
    );
}
