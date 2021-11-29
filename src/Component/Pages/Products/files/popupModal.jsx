import React from "react";
import { Modal } from "react-responsive-modal";
import Productinfo from "../../Description/component/product-info";
import InstagramProductInfo from "../../Description/component/instagramProductInfo";
import InstagramReviewInfo from "../../Description/component/instagramReviewInfo";
import LoginPopup from "../../../Common/Errors/loginPopup";

export default function PopupModal({
    onCloseModal,
    open,
    product,
    setOpen,
    setClick,
    click,
    productsCount,
    error,
}) {
    const handleForwardClick = () => {
        if (click === productsCount - 1) {
            setClick(0);
        } else {
            setClick(click + 1);
        }
    };

    const handleBackwardClick = () => {
        if (click === 0) {
            setClick(productsCount - 1);
        } else {
            setClick(click - 1);
        }
    };
    return (
        <Modal
            classNames={{
                modal: `modal-ev ${
                    (product && product.source === "instagram") ||
                    (product && product.source === "review")
                        ? "instagram-popup"
                        : null
                } ${error === "loginPopup" ? " loginPopupModal" : null}`,
            }}
            open={open}
            center={true}
            onClose={onCloseModal}
        >
            <div className="modal-container">
                {product && product?.source === "instagram" ? (
                    <div className="instagram-container">
                        <button
                            className="previousButton"
                            onClick={() => handleBackwardClick()}
                        >
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <InstagramProductInfo
                            imageURL={product.medium_image_url}
                            thumbnailImageURL={product.image_url}
                            content={product.post.content}
                            profilePicture={product.post.profile_picture}
                            username={product.post.username}
                            date={product.post.created_time}
                            taggedProducts={product.tagged_products}
                            votesUp={product.post.votes_up}
                            votesDown={product.post.votes_down}
                            mediaType={product.media_type}
                            videoURL={product.standard_resolution_url}
                        />
                        <button
                            onClick={() => handleForwardClick()}
                            className="nextButton"
                        >
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                ) : product && product?.source === "review" ? (
                    <div className="instagram-container">
                        <button
                            onClick={() => handleBackwardClick()}
                            className="previousButton"
                        >
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <InstagramReviewInfo
                            imageURL={product.medium_image_url}
                            taggedProducts={product.tagged_products}
                            reviewTitle={product.review.title}
                            reviewContent={product.review.content}
                            reviewScore={product.review.score}
                            reviewDate={product.review.created_at}
                            username={product.review.user.display_name}
                            userImage={product.review.user.social_image}
                            isVerifiedBuyer={product.review.verified_buyer}
                            votesUp={product.review.votes_up}
                            votesDown={product.review.votes_down}
                        />
                        <button
                            onClick={() => handleForwardClick()}
                            className="nextButton"
                        >
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                ) : error === "loginPopup" ? (
                    <LoginPopup />
                ) : (
                    <Productinfo
                        productdata={product}
                        prod_id={product.prod_id}
                        loading={false}
                        setOpen={setOpen}
                    />
                )}
            </div>
        </Modal>
    );
}
