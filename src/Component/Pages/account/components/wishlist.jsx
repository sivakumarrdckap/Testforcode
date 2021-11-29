import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Pagenation from "./pagenation";

export default function Wishlist({ setWishlistData, wishlistData }) {
    const customer_details = useSelector((state) => state.customer_details);
    useEffect(() => {
        axios
            .get(
                `https://dev3.elementvape.com/rest/default/V1/wishlist/items?customer_id=${customer_details.id}&page=1&limit=5`,
                {
                    headers: {
                        Authorization:
                            "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
                    },
                }
            )
            .then((res) => {
                console.log({ data: res.data });
                res.status === 200
                    ? setWishlistData(JSON.parse(res.data))
                    : setWishlistData("error");
            })
            .catch(() => setWishlistData("error"));
    }, [customer_details]);
    return (
        <div className="wishlist-wrapper">
            <Pagenation />
            <div className="products-grid wishlist">
                <ol className="product-items">
                    {wishlistData &&
                        wishlistData.data &&
                        wishlistData.data.length &&
                        wishlistData.data.map(({ product, qty }) => {
                            return (
                                <li className="grid-items">
                                    <div className="item">
                                        <div className="item-wrapper">
                                            <div className="item-wrapper-inner">
                                                <img
                                                    src={product.thumbnail}
                                                    alt=""
                                                />
                                            </div>

                                            <div className="item-content">
                                                <div>
                                                    <span className="product-name">
                                                        <a href="#">
                                                            {product.name}
                                                        </a>
                                                    </span>
                                                </div>
                                                <div className="price-container">
                                                    <span className="special-price">
                                                        ${" "}
                                                        {parseFloat(
                                                            product.price
                                                        ).toFixed(2)}
                                                    </span>
                                                    {/* <span className="old-price">$69.99</span> */}
                                                </div>
                                                <div className="seedetails">
                                                    <p>See Details</p>
                                                </div>
                                            </div>
                                            <form
                                                action=""
                                                className="wishlist-actions"
                                            >
                                                <div className="control">
                                                    <textarea
                                                        name=""
                                                        className="comments"
                                                    ></textarea>
                                                </div>
                                                <div className="box-tocart">
                                                    <div className="field qty">
                                                        <label className="label">
                                                            <span>Qty</span>
                                                        </label>
                                                        <div className="control">
                                                            <input
                                                                type="number"
                                                                className="input-text qty"
                                                                value={qty}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="product-item-actions">
                                                        <a>Add to cart</a>
                                                    </div>
                                                    <div className="product-item-actions-float">
                                                        <a className="delete">
                                                            delete
                                                        </a>
                                                        <a className="edit">
                                                            edit
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                </ol>
            </div>
            <div className="wishlist-action-btn">
                <div className="main-btn">
                    <a href="#">Update Wish List</a>
                    <a href="#">Share Wish List</a>
                    <a href="#">Add All to Cart</a>
                </div>
            </div>
            <Pagenation />
        </div>
    );
}
