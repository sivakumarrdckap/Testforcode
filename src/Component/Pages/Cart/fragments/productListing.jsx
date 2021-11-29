import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../../../redux/actions";
import axios from "axios";
import Swal from "sweetalert2";

export default function ProductListing({ cart_data }) {
    let history = useHistory();
    let dispatch = useDispatch();
    const customer_token = useSelector((state) => state.customer_token);
    const customerdetails = useSelector((state) => state.customer_details);
    const cartData = useSelector((state) => state.update_cart);
    const cartid = useSelector((state) => state.customer_cart_id);

    //loading states
    const [loading, setloading] = useState(false);
    const [click, setclick] = useState(null);

    //function to handle clear cart
    const handleClearCart = () => {
        if (customer_token) {
            axios
                .post(
                    `${process.env.REACT_APP_MAGENTO_URI}clear_shopping_cart`,
                    { quote_id: cartid },
                    {
                        headers: {
                            Authorization: "Bearer " + customer_token,
                        },
                    }
                )
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(updateCart([]));
                        Swal.fire(
                            "Success",
                            "Cart cleared successfully",
                            "success"
                        );
                    }
                })
                .catch((err) => {
                    Swal.fire("Error", err?.response?.data?.message, "error");
                    console.log(err);
                });
        } else {
            dispatch(updateCart([]));
            Swal.fire("Success", "Cart cleared successfully", "success");
        }
    };

    //Function to remove Item
    const deleteItem = (id, name, i) => {
        if (customer_token) {
            setloading(true);
            axios
                .delete(
                    `${process.env.REACT_APP_MAGENTO_URI}carts/mine/items/${id}`,
                    {
                        headers: {
                            Authorization: "Bearer " + customer_token,
                        },
                    }
                )
                .then((res) => {
                    if (res.status === 200) {
                        setloading(false);
                        Swal.fire(
                            "Success",
                            name + " is deleted successfully",
                            "success"
                        );
                        dispatch(
                            updateCart(
                                cartData.filter((item) => item !== cartData[i])
                            )
                        );
                    }
                })
                .catch((err) => {
                    setloading(false);
                    Swal.fire("Error", err?.response?.data?.message, "error");
                    console.log(err);
                });
        } else {
            Swal.fire("Success", name + " is deleted successfully", "success");
            dispatch(
                updateCart(cartData.filter((item) => item !== cartData[i]))
            );
        }
    };

    //Function to move items to wishlist
    const addWishlist = (sku, name, i) => {
        const limitted = sku.split("-");
        let singleSku = "";
        let finalSku = "";
        if (limitted.length === 1 || limitted[0] === limitted[1]) {
            finalSku = limitted[0];
            singleSku = limitted[0];
        } else if (limitted.length > 1) {
            finalSku = limitted[0] + "-" + limitted[1];
            singleSku = limitted[0];
        }

        setloading(true);
        axios
            .get(`${process.env.REACT_APP_MAGENTO_URI}products/${finalSku}`, {
                headers: {
                    Authorization:
                        "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    axios
                        .post(
                            `${process.env.REACT_APP_MAGENTO_URI}wishlist/add`,
                            {
                                product_id: res.data.id,
                                customer_id: customerdetails.id,
                            },
                            {
                                headers: {
                                    Authorization:
                                        "Bearer " +
                                        process.env.REACT_APP_MAGENTO_ADMIN_API,
                                },
                            }
                        )
                        .then((res) => {
                            if (res.status === 200) {
                                setloading(false);
                                Swal.fire(
                                    "Success",
                                    name + " is moved to wishlist successfully",
                                    "success"
                                );
                                dispatch(
                                    updateCart(
                                        cartData.filter(
                                            (item) => item !== cartData[i]
                                        )
                                    )
                                );
                            }
                        })
                        .catch((err) => {
                            setloading(false);
                            Swal.fire(
                                "Error",
                                err?.response?.data?.message,
                                "error"
                            );
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                setloading(true);
                axios
                    .get(
                        `${process.env.REACT_APP_MAGENTO_URI}products/${singleSku}`,
                        {
                            headers: {
                                Authorization:
                                    "Bearer " +
                                    process.env.REACT_APP_MAGENTO_ADMIN_API,
                            },
                        }
                    )
                    .then((res) => {
                        axios
                            .post(
                                `${process.env.REACT_APP_MAGENTO_URI}wishlist/add`,
                                {
                                    product_id: res.data.id,
                                    customer_id: customerdetails.id,
                                },
                                {
                                    headers: {
                                        Authorization:
                                            "Bearer " +
                                            process.env
                                                .REACT_APP_MAGENTO_ADMIN_API,
                                    },
                                }
                            )
                            .then((res) => {
                                if (res.status === 200) {
                                    setloading(false);
                                    Swal.fire(
                                        "Success",
                                        name +
                                            " is moved to wishlist successfully",
                                        "success"
                                    );
                                    dispatch(
                                        updateCart(
                                            cartData.filter(
                                                (item) => item !== cartData[i]
                                            )
                                        )
                                    );
                                }
                            })
                            .catch((err) => {
                                setloading(false);
                                Swal.fire(
                                    "Error",
                                    err?.response?.data?.message,
                                    "error"
                                );
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        setloading(false);
                        console.log(err);
                        Swal.fire(
                            "Error",
                            err?.response?.data?.message,
                            "error"
                        );
                    });
            });
    };

    //Function to edit item
    const handleEdit = (sku, itemId) => {
        const limitted = sku.split("-");
        let singleSku = "";
        let finalSku = "";
        if (limitted.length === 1 || limitted[0] === limitted[1]) {
            finalSku = limitted[0];
            singleSku = limitted[0];
        } else if (limitted.length > 1) {
            finalSku = limitted[0] + "-" + limitted[1];
            singleSku = limitted[0];
        }

        setloading(true);
        axios
            .get(`${process.env.REACT_APP_MAGENTO_URI}products/${finalSku}`, {
                headers: {
                    Authorization:
                        "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    setloading(false);
                    history.push(
                        `/cartPage/configure/item_id/${itemId}/prod_id/${res.data.id}`
                    );
                }
            })
            .catch((err) => {
                axios
                    .get(
                        `${process.env.REACT_APP_MAGENTO_URI}products/${singleSku}`,
                        {
                            headers: {
                                Authorization:
                                    "Bearer " +
                                    process.env.REACT_APP_MAGENTO_ADMIN_API,
                            },
                        }
                    )
                    .then((res) => {
                        setloading(false);
                        history.push(
                            `/cartPage/configure/item_id/${itemId}/prod_id/${res.data.id}`
                        );
                    })
                    .catch((err) => {
                        setloading(false);
                        console.log(err);
                        Swal.fire(
                            "Error",
                            err?.response?.data?.message,
                            "error"
                        );
                    });
            });
    };

    return (
        <>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <td width="70%">Item</td>
                        <td>Price</td>
                        <td>Qty</td>
                        <td>Subtotal</td>
                    </thead>
                    <tbody>
                        {cart_data &&
                            cart_data.map(
                                (
                                    {
                                        option_type_data,
                                        media_gallery_entries,
                                        price,
                                        qty,
                                        name,
                                        sku,
                                        prod_id,
                                        item_id,
                                        option_type_id,
                                        option_id,
                                    },
                                    i
                                ) => {
                                    let prodprice = parseFloat(price);
                                    return (
                                        <>
                                            <tr
                                                style={{ position: "relative" }}
                                            >
                                                <td
                                                    width="70%"
                                                    className="col item"
                                                >
                                                    <div className="row">
                                                        <div className="image col-4">
                                                            <img
                                                                src={
                                                                    "https://elementvape.com/pub/media/catalog/product" +
                                                                    media_gallery_entries
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="info col-8">
                                                            <strong>
                                                                {name}{" "}
                                                            </strong>
                                                            {option_type_data &&
                                                                Object.keys(
                                                                    option_type_data
                                                                ).map((key) => {
                                                                    prodprice +=
                                                                        parseFloat(
                                                                            option_type_data[
                                                                                key
                                                                            ]
                                                                                .price
                                                                        );
                                                                    return (
                                                                        <span>
                                                                            <strong>
                                                                                {
                                                                                    key
                                                                                }

                                                                                :{" "}
                                                                            </strong>
                                                                            {
                                                                                option_type_data[
                                                                                    key
                                                                                ]
                                                                                    .title
                                                                            }
                                                                        </span>
                                                                    );
                                                                })}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="col price"
                                                    data-th="Price"
                                                >
                                                    {prodprice.toFixed(2)}
                                                </td>
                                                <td
                                                    className="col qty"
                                                    data-th="Qty"
                                                >
                                                    {qty}
                                                </td>
                                                <td
                                                    className="col subtotal icons-container"
                                                    data-th="Subtotal"
                                                >
                                                    <span>
                                                        {(
                                                            prodprice * qty
                                                        ).toFixed(2)}
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <span>
                                                        {customer_token ? (
                                                            <button
                                                                className="icons-container-link-button"
                                                                title="Move to wishlist"
                                                                onClick={() => {
                                                                    addWishlist(
                                                                        sku,
                                                                        name,
                                                                        i
                                                                    );
                                                                    setclick(i);
                                                                }}
                                                            >
                                                                <i className="far fa-heart"></i>
                                                            </button>
                                                        ) : null}
                                                        <button
                                                            className="icons-container-link-button"
                                                            title="Edit item"
                                                            onClick={() => {
                                                                handleEdit(
                                                                    sku,
                                                                    item_id
                                                                );
                                                                setclick(i);
                                                            }}
                                                        >
                                                            <i className="fas fa-pencil-alt"></i>
                                                        </button>
                                                        <button
                                                            className="icons-container-link-button"
                                                            title="Remove item"
                                                            onClick={() => {
                                                                deleteItem(
                                                                    item_id,
                                                                    name,
                                                                    i
                                                                );
                                                                setclick(i);
                                                            }}
                                                        >
                                                            <i className="fas fa-times"></i>
                                                        </button>
                                                    </span>
                                                </td>
                                                <div
                                                    className={
                                                        click === i && loading
                                                            ? "loading-border"
                                                            : null
                                                    }
                                                ></div>
                                            </tr>
                                        </>
                                    );
                                }
                            )}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="cart-footer">
                <button onClick={() => history.push("/")}>
                    Continue Shopping
                </button>
                <button onClick={() => handleClearCart()}>
                    Clear Shopping Cart
                </button>
            </div>
        </>
    );
}
