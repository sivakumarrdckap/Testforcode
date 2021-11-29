import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function InstagramReviewInfo({
    imageURL,profilePicture, taggedProducts,
    reviewTitle, reviewContent, reviewScore,reviewDate,username,userImage,isVerifiedBuyer,votesUp,votesDown
}) {

    //Customizing date value
    const dateValue = reviewDate.split('T')[0].split('-');
    const displayDate = dateValue[1].toString() + '/' + dateValue[2] + '/' + dateValue[0]

    const [activeId, setactiveId] = useState(taggedProducts[0].id);
    // const [star, setStar] = useState(0);

    //Array to count review rating
    const arr = []
    for(let i=0;i<reviewScore;i++){
        arr.push(i)
    }
    
    return (
        <div className='instagramProductInfo'>
            <div className='instagramProductInfo-overlay'></div>
            <div className='instagramProductInfo-left'>
                <img
                    src={imageURL}
                    alt='Product'
                />
            </div>
            <div className='instagramProductInfo-right'>
                <div className = 'instagramProductInfo-right-top'>
                    <>
                        {taggedProducts.map(product=>{
                            return product.id===activeId 
                            ? (
                                <>
                                    <div className='instagramProductInfo-right-top-left'>
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className='instagramProductInfo-right-top-right'>
                                        <div className='instagramProductInfo-right-top-right-score-container'>
                                            <p className='instagramProductInfo-right-top-right-score'>{reviewScore && parseFloat(reviewScore)?.toFixed(1)}</p>
                                            <div className="review-star">
                                                <i
                                                    className={`${
                                                        reviewScore <= 0 ? "far fa-star" : (reviewScore >= 0.1 && reviewScore <= 0.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                    }`}
                                                />
                                                <i
                                                    className={`${
                                                        reviewScore <= 1 ? "far fa-star" : (reviewScore >= 1.1 && reviewScore <= 1.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                    }`}
                                                />
                                                <i
                                                    className={`${
                                                        reviewScore <= 2 ? "far fa-star" : (reviewScore >= 2.1 && reviewScore <= 2.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                    }`}
                                                />
                                                <i
                                                    className={`${
                                                        reviewScore <= 3 ? "far fa-star" : (reviewScore >= 3.1 && reviewScore <= 3.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                    }`}
                                                />
                                                <i
                                                    className={`${
                                                        reviewScore <= 4 ? "far fa-star" : (reviewScore >= 4.1 && reviewScore <= 4.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                    }`}
                                                />
                                            </div>
                                        </div>
                                        
                                        <p className='instagramProductInfo-right-top-right-name'>{product?.name}</p> 
                                        <a href={product.product_url} target='_blank' className='instagramProductInfo-right-top-right-button'>
                                            Shop Now
                                        </a>
                                    </div> 
                                </>
                            ) 
                            : null
                        })}
                    </>                
                </div>
                <div className = 'instagramProductInfo-right-middle'> 
                        {taggedProducts?.length > 1 ? <span>Other Tagged Products</span> : null}               
                        {
                            taggedProducts?.length > 1 && taggedProducts.map((product,i)=>(
                                    <img
                                        className={
                                            activeId === product.id
                                                ?'selected instagramProductInfo-right-middle-taggedProduct'
                                                : 'instagramProductInfo-right-middle-taggedProduct'
                                            }
                                        src={product.image_url}
                                        alt={product.name}
                                        onClick={()=>setactiveId(product.id)}
                                    />
                            ))
                        }
                </div>
                <div className = 'instagramProductInfo-right-bottom'>
                    <span>
                        <p className='instagramProductInfo-right-bottom-profile'>
                            {profilePicture ? profilePicture : username.split('')[0].toUpperCase()}
                            {isVerifiedBuyer ? <i class="fas fa-check-circle"></i> : null}
                        </p>
                        <p className='instagramProductInfo-right-bottom-username'>{username}</p>
                        <p className='instagramProductInfo-right-bottom-date'>{displayDate}</p>
                    </span>
                    <span className='instagramProductInfo-right-bottom-reviewRating'>
                        {
                            arr.map(i=>(
                                <i class="fas fa-star"></i>
                            ))
                        }
                    </span>
                    <p className='instagramProductInfo-right-bottom-content-title'>{reviewTitle}</p>
                    <p className='instagramProductInfo-right-bottom-content'>{reviewContent}</p>
                </div>
                <div className = 'instagramProductInfo-right-like'>
                    <span>
                        <p>{votesUp}</p>
                        <i class="fas fa-thumbs-up"></i>
                    </span>        
                    <span>
                        <p>{votesDown}</p>
                        <i class="fas fa-thumbs-down"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

{/* const url = product?.product_url.split('/'); */}