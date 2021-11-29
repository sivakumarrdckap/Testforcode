import React from "react";
import { useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import PopupModal from "./popupModal";
import { GetYotpoData } from "../../../Common/ReviewData";
import { useEffect } from "react";

export default function Product({ product }) {
    let history = useHistory();
    const { prod_id, url_key, image, name, price, custom_attributes } = product;
    const [yotpo, setYotpo] = useState(null);
    const [open, setOpen] = useState(false);
    const [star, setStar] = useState(0);
    const [show, setshow] = useState(true);
    const onOpenModal = () => {
        setOpen(true);
    };

    const onCloseModal = () => {
        setOpen(false);
    };
    useEffect(() => {
        GetYotpoData(setStar, setYotpo, prod_id);
        // let qty = product.options[0]?.values[0]?.qty;

        // parseInt(qty) ? setshow(true) : setshow(false);
    }, [product]);

    return show ? (
        <li className="grid-items">
            <div className="item">
                <div className="item-wrapper">
                    <img
                        src={
                            "https://elementvape.com/pub/media/catalog/product" +
                            image
                        }
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "https://media-exp1.licdn.com/dms/image/C4E0BAQGCxDCu0bp79g/company-logo_200_200/0/1551996792494?e=2159024400&v=beta&t=HqzCn3HBlKheQkOfGWr1puewT-VLyaufAEKo0frBh8Q";
                        }}
                        alt=""
                    />
                    <div className="overlay">
                        <button onClick={onOpenModal}>Quick View</button>
                    </div>
                </div>
                <div
                    onClick={() => {
                        history.push("/" + url_key);
                    }}
                    className="item-content"
                >
                    <div>
                        <span className="product-name">
                            <a>{name}</a>
                        </span>
                    </div>
                    <div className="price-container">
                        {custom_attributes?.map((specialPrice, j) => {
                            return specialPrice.attribute_code ==
                                "special_price" ? (
                                <span className="special-price">
                                    $
                                    {parseFloat(specialPrice.value)?.toFixed(2)}
                                </span>
                            ) : null;
                        })}

                        <span className="old-price">${price}</span>
                    </div>
                    {star > 0 ? (
                        <div className="product-review">
                            <div className="review-star">
                                <i
                                    className={`${
                                        star > 0 ? "fas" : "far"
                                    } fa-star`}
                                />
                                <i
                                    className={`${
                                        star > 1 ? "fas" : "far"
                                    } fa-star`}
                                />
                                <i
                                    className={`${
                                        star > 2 ? "fas" : "far"
                                    } fa-star`}
                                />
                                <i
                                    className={`${
                                        star > 3 ? "fas" : "far"
                                    } fa-star`}
                                />
                                <i
                                    className={`${
                                        star > 4 ? "fas" : "far"
                                    } fa-star`}
                                />
                            </div>
                            <div className="review-text">
                                <p>
                                    <span className="count">
                                        {yotpo && yotpo.bottomline.total_review}
                                    </span>{" "}
                                    Reviews
                                </p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            {open && (
                <PopupModal
                    product={product}
                    onCloseModal={onCloseModal}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </li>
    ) : null;
}
