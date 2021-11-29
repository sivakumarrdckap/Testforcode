import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function InstagramProductInfo({
    imageURL,content,profilePicture,username,date, taggedProducts,votesUp,votesDown,mediaType,videoURL
}) {

    const [activeId, setactiveId] = useState(taggedProducts.length && taggedProducts[0].id);

    const dateValue = date.split('T')[0].split('-');
    const displayDate = dateValue[1].toString() + '/' + dateValue[2] + '/' + dateValue[0]
    
    return (
        <div className='instagramProductInfo'>
            <div className='instagramProductInfo-overlay'></div>
            <div className='instagramProductInfo-left'>
                {
                    mediaType === 'image' ? (
                        <img
                            src={imageURL}
                            alt='Product'
                        />
                    ):(
                        <video src={videoURL} width='400'  controls autoPlay muted></video>
                    )
                }
            </div>
            <div className='instagramProductInfo-right'>
                {
                    taggedProducts.length ? (
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
                                                    <p className='instagramProductInfo-right-top-right-score'>{product?.score && parseFloat(product?.score).toFixed(1)}</p>
                                                    <div className="review-star">
                                                        <i
                                                            className={`${
                                                                product?.score <= 0 ? "far fa-star" : (product?.score >= 0.1 && product?.score <= 0.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                            }`}
                                                        />
                                                        <i
                                                            className={`${
                                                                product?.score <= 1 ? "far fa-star" : (product?.score >= 1.1 && product?.score <= 1.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                            }`}
                                                        />
                                                        <i
                                                            className={`${
                                                                product?.score <= 2 ? "far fa-star" : (product?.score >= 2.1 && product?.score <= 2.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                            }`}
                                                        />
                                                        <i
                                                            className={`${
                                                                product?.score <= 3 ? "far fa-star" : (product?.score >= 3.1 && product?.score <= 3.5) ? "fas fa-star-half-alt" : "fas fa-star"
                                                            }`}
                                                        />
                                                        <i
                                                            className={`${
                                                                product?.score <= 4 ? "far fa-star" : (product?.score >= 4.1 && product?.score <= 4.5) ? "fas fa-star-half-alt" : "fas fa-star"
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
                    ):null
                }
                
                {
                    taggedProducts.length ? (
                        <div className = 'instagramProductInfo-right-middle'> 
                            {taggedProducts.length ? <span>Other Tagged Products</span> : null}                  
                            {
                                taggedProducts.length && taggedProducts.map((product,i)=>(
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
                    ):null
                }
                
                <div className = 'instagramProductInfo-right-bottom'>
                    <span>
                        <p className='instagramProductInfo-right-bottom-profile'>{
                            profilePicture ? profilePicture : username.split('')[0].toUpperCase()}
                        </p>
                        <p className='instagramProductInfo-right-bottom-username'>{username}</p>
                        <p className='instagramProductInfo-right-bottom-date'>{displayDate}</p>
                    </span>
                    <p className='instagramProductInfo-right-bottom-content'>{content}</p>
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
