import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Reviews({ yotpo }) {
    const {
        reviews,
        bottomline: { average_score, total_review },
    } = yotpo;
    let star = Math.round(average_score);
    return (
        <div className="product-discription-box reviews-section">
            <h2>Ratings & Reviews</h2>
            <div className="rating-info">
                <div className="rating">
                    <span>{star}</span>
                    <div className="review-star">
                        <i className={`${star > 0 ? "fas" : "far"} fa-star`} />
                        <i className={`${star > 1 ? "fas" : "far"} fa-star`} />
                        <i className={`${star > 2 ? "fas" : "far"} fa-star`} />
                        <i className={`${star > 3 ? "fas" : "far"} fa-star`} />
                        <i className={`${star > 4 ? "fas" : "far"} fa-star`} />
                    </div>
                    <span className={"total_review"}>
                        {total_review} Reviews
                    </span>
                </div>
            </div>
            <hr />
            <div className="tab-wrapper">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="REVIEWS">
                        <div className="reviews">
                            {reviews.map(
                                ({
                                    content,
                                    score: star,
                                    user: { display_name, social_image },
                                }) => {
                                    return (
                                        <>
                                            <div className="review">
                                                <span className="icon">
                                                    {display_name[0]}
                                                </span>
                                                <span className="name">
                                                    {display_name}
                                                    <div className="review-star">
                                                        <i
                                                            className={`${
                                                                star > 0
                                                                    ? "fas"
                                                                    : "far"
                                                            } fa-star`}
                                                        />
                                                        <i
                                                            className={`${
                                                                star > 1
                                                                    ? "fas"
                                                                    : "far"
                                                            } fa-star`}
                                                        />
                                                        <i
                                                            className={`${
                                                                star > 2
                                                                    ? "fas"
                                                                    : "far"
                                                            } fa-star`}
                                                        />
                                                        <i
                                                            className={`${
                                                                star > 3
                                                                    ? "fas"
                                                                    : "far"
                                                            } fa-star`}
                                                        />
                                                        <i
                                                            className={`${
                                                                star > 4
                                                                    ? "fas"
                                                                    : "far"
                                                            } fa-star`}
                                                        />
                                                    </div>
                                                </span>
                                                <div className="content">
                                                    {content}
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
