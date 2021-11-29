import React from "react";
import Slider from "./Components/slider";
import MultiSlider from "./Components/MultiSlider";
import BestVape from "./Components/BestVape";
import StarterKit from "./Components/StarterKit";
import FeatureBrands from "./Components/FeatureBrands";
export default HomePage() {
    
    return (
        
            <div className="page-main">
                <div className="cus-container">
                    <Slider />
                    <BestVape />
                </div>
                <MultiSlider
                    title={"NEW ARRIVALS"}
                    list={[
                        2357,
                        2947,
                        4272,
                        4273,
                        3664,
                        3665,
                        2603,
                        1416,
                        2762,
                        2681,
                    ]}
                />
                <StarterKit />
                <MultiSlider
                    title={"BESTSELLERS"}
                    list={[
                        2357,
                        5924,
                        4273,
                        5783,
                        1416,
                        4916,
                        4917,
                        5376,
                        4096,
                        5153,
                    ]}
                />
                <FeatureBrands />
            </div>
        </>
    );
}
