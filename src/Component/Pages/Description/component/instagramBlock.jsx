import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import PopupModal from "../../Products/files/popupModal";
import Skeleton from 'react-loading-skeleton';

export default function InstagramBlock({productId}) {

    const [totalCount, settotalCount] = useState(0);
    const [instagramImages, setinstagramImages] = useState([]);
    const [loading, setloading] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeIndex, setactiveIndex] = useState(0);
    const [click, setClick] = useState(0);

    //TODO: 3204 //4132
    
    const responsive = {   
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1250 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1250, min: 999 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 999, min: 768 },
            items: 4,
        },
        largemobile: {
            breakpoint: { max: 768, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
        },
    };

    useEffect(() => {
        setloading(true);
        axios.get(`https://api.yotpo.com/v1/widget/${process.env.REACT_APP_YOTPO_INSTAGRAM}/albums/product/${productId}`)
            .then((res)=>{
                if(res.status===200){
                    settotalCount(res.data.response.pagination.total)
                }
            })
            .then(()=>{
                totalCount && axios.get(`https://api.yotpo.com/v1/widget/${process.env.REACT_APP_YOTPO_INSTAGRAM}/albums/product/${productId}?per_page=${totalCount}`)
                .then((res)=>{
                    if(res.status===200){
                        setloading(false)
                        setinstagramImages(res.data.response.images)
                    }
                })
            }).catch((err)=>{
                setloading(false)
                console.log(err)
            })
    }, [totalCount])

    const onCloseModal = () => {
        setOpen(false);
        setClick(0)
    };

    return (
        <>
        {
            instagramImages.length ? (
                <section className='pdpInstagram'>
                        <div className='pdpInstagram-container'>
                        <h4 className='pdpInstagram-title'>
                            Lifestyle Images
                        </h4>
                        {
                            !loading ? (
                                <Carousel
                                    centerMode={true}
                                    responsive={responsive}
                                    showDots={false}
                                    autoPlay={false}
                                    infinite={true}
                                    itemClass={ 'carousel-item-padding-40-px'}
                                    autoPlaySpeed={3000}
                                    className={totalCount<=3 ? 'carousel-center' : null}
                                >
                                    {
                                        instagramImages.map((val,i)=>(
                                                <img
                                                    src={val.image_url}
                                                    alt={val.source}
                                                    onClick={()=>{
                                                        setOpen(true)
                                                        setactiveIndex(i)
                                                    }}
                                                />
                                        ))
                                    }
                                </Carousel>
                            ):(
                                <Skeleton count={1} width={600} height={120}/>
                            )
                        }
                        </div>
                    </section>
            ):(null)
        }
            {instagramImages && open && (
                <div>
                    <PopupModal
                        product={!click ? instagramImages[activeIndex] : instagramImages[click]}
                        onCloseModal={onCloseModal}
                        open={open}
                        setOpen={setOpen}
                        setClick={setClick}
                        click={click}
                        productsCount={totalCount}
                        activeIndex={activeIndex}
                    />
                </div>
            )}
    </>            

    )
}
