import React , {useEffect , useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import ReactHtmlParser from "react-html-parser";

export default function Slider() {
    const [bannerSlide1 , setBannerSlide1] = useState(null);
    const [bannerSlide2 , setBannerSlide2] = useState(null);
    const [loading , setloading] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

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

    function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
        return {
        width,
        height
        };
    }
    useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setloading(true)
        Axios.get("https://dev3.elementvape.com/rest/V1/get_home_banners")
            .then((res) => {
                if (res.status === 200) {
                    setBannerSlide1(JSON.parse(res.data[0]));
                    setBannerSlide2(JSON.parse(res.data[1]));
                    setloading(false)
                }
            })
            .catch((err) => {
                console.log(err.response);
                setloading(false)
            });
    }, []);

    return (
        <>
        {bannerSlide1 && bannerSlide2 &&
            <div className="home-slider">
                <Carousel
                    responsive={responsive}
                    itemClass="carousel-item-padding-40-px"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    showDots={true}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={3000}
                >
                    { 
                        windowDimensions.width <  767 ? (
                            bannerSlide1.map((val,i)=>(
                                    <Link  className="each-slide" to={'/'}>
                                            <img
                                                title={val.title}
                                                alt={val.title}
                                                src={val.image.replaceAll('{{media url=\"' , 'https://dev3.elementvape.com/pub/media/').replaceAll('\"}}' , "")}
                                            />
                                            {bannerSlide2.length-1 === i ? ReactHtmlParser(val.content) : null}
                                    </Link>
                         ))
                        ):(
                            bannerSlide2.map((val,i)=>(
                                    <Link  className="each-slide" to={'/'}>
                                        <img
                                            title={val.title}
                                            alt={val.title}
                                            src={val.image.replaceAll('{{media url=\"' , 'https://dev3.elementvape.com/pub/media/').replaceAll('\"}}' , "")}
                                        />
                                        {bannerSlide2.length-1 === i ? ReactHtmlParser(val.content) : null}
                                    </Link>
                         ))
                        )
                    }
                </Carousel>
            </div>}
            {loading && <div><Skeleton width={"100%"} height={400} count={1} /></div>}
         </> 
    );
}