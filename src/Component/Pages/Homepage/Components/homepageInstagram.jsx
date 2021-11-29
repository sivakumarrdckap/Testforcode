import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import PopupModal from "../../Products/files/popupModal";

export default function HomepageInstagram() {
    const [totalCount, settotalCount] = useState(0);
    const [instagramImages, setinstagramImages] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setPage] = useState(0);
    const [open, setOpen] = useState(false);
    const [activeIndex, setactiveIndex] = useState(0);
    const [click, setClick] = useState(0);
    const [oddValue, setoddValue] = useState(false);
    const [instagram, setinstagram] = useState([]);

    useEffect(() => {
        setloading(true);
        axios
            .get(
                `https://api.yotpo.com/v1/widget/${process.env.REACT_APP_YOTPO_INSTAGRAM}/albums/by_name?album_name=My%20Posts%20Album&page=${page}&per_page=7`
            )
            .then((res) => {
                if (res.status === 200) {
                    if (!instagram.length) {
                        setinstagramImages(res.data.response.images);

                        setinstagram([res.data.response.images]);
                    } else {
                        setinstagramImages([
                            ...instagramImages,
                            ...res.data.response.images,
                        ]);
                        setinstagram((instagram) => [
                            ...instagram,
                            res.data.response.images,
                        ]);
                    }
                    settotalCount(res.data.response.pagination.total);
                    setloading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setloading(false);
            });
    }, [page]);

    //Load More functionality
    const loadMore = () => {
        if (totalCount > instagramImages.length) {
            if (page === 0) {
                setPage(page + 2);
            } else {
                setPage(page + 1);
            }
        }
    };

    // modal close
    const onCloseModal = () => {
        setOpen(false);
        setClick(0);
    };

    // function to check the clicked product id
    const handleActiveIndex = (imageId)=>{
        instagramImages.map((val,i)=>{
            val.image_id === imageId && setactiveIndex(i)
        })
    }

    return (
        <div className="homepageInstagram">
            {
                    <div className='cus-container'>
                    <h3>#elementvape</h3>
                    {instagram.map((images,j) => {
                        return (
                                <div className={j%2!==0 ? "homepageInstagram-container reverse":"homepageInstagram-container " }>
                                    {
                                        images.map((val,i)=>(
                                            i===0 ? (
                                                <div className= "homepageInstagram-container-left" 
                                                style={j%2===0 ? {textAlign:'right'}: {textAlign:'left'}}
                                                >
                                                    {
                                                        // loading ? (
                                                        //     <Skeleton count={1} height={595} width={595}/>
                                                        // ):(
                                                            val && val?.media_type === "image" ? (
                                                                <div className='image-box'>
                                                                <img
                                                                    className="big-image"
                                                                    src={val?.medium_image_url}
                                                                    alt="product"
                                                                    onClick={() => {
                                                                        setOpen(true);
                                                                        handleActiveIndex(val.image_id)
                                                                    }}
                                                                />
                                                                <i class="fab fa-instagram"></i>
                                                                </div>
                                                            ) : (
                                                                <div className='image-box'>
                                                                    <video
                                                                        src={val?.standard_resolution_url}
                                                                        className="big-image"
                                                                        // width={'320'}
                                                                        autoPlay
                                                                        muted
                                                                        onClick={() => {
                                                                            setOpen(true);
                                                                            handleActiveIndex(val.image_id)
                                                                        }}
                                                                    >
                                                                        Video is currently unavailable
                                                                    </video>
                                                                    <i class="fab fa-instagram"></i>
                                                                </div>  
                                                                
                                                            )
                                                        // )
                                                    }
                                                </div>
                                            ) :(
                                                null
                                            )
                                        ))
                                    }
                                <div className='homepageInstagram-container-right'> 
                                    {
                                        images.map((val,i)=>(
                                            i!==0 ? (
                                                <>
                                                    {
                                                        // loading ? (
                                                        //     <Skeleton count={1} height={295} width={295}/>
                                                        // ):(
                                                            val && val?.media_type === "image" ? (
                                                                <div className='image-box right-split'>
                                                                    <img
                                                                        className="small-image"
                                                                        src={val?.low_resolution_image_url}
                                                                        alt="product"
                                                                        onClick={() => {
                                                                            setOpen(true);
                                                                            handleActiveIndex(val.image_id)
                                                                        }}
                                                                    />
                                                                    <i class="fab fa-instagram"></i>
                                                                </div>
                                                                
                                                            ) : (
                                                                <div className='image-box right-split'> 
                                                                    <video
                                                                        src={val?.standard_resolution_url}
                                                                        className="small-image"
                                                                        // width={'320'}
                                                                        autoPlay
                                                                        muted
                                                                        onClick={() => {
                                                                            setOpen(true);
                                                                            handleActiveIndex(val.image_id)
                                                                        }}
                                                                    >
                                                                        Video is currently unavailable
                                                                    </video>
                                                                    <i class="fab fa-instagram"></i>
                                                                </div>
                                                                
                                                            )
                                                        // )
                                                    }
                                                  
                                                </>
                                            ):null
                                        ))
                                    }
                                </div>
                            </div>
                        );
                    })}
                    </div>  
            }
         
            {
                totalCount > instagramImages.length ? (
                    <div className='load-more'>
                        <button className='load-more-btn' onClick={()=>{
                            loadMore()
                            setoddValue(oddValue === false ? true : false)
                        }}>
                            Load More
                        </button>
                    </div>
                ):null
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
                        productsCount={instagramImages.length}
                        activeIndex={activeIndex}
                    />
                </div>
            )}  
        </div>
    );
}
