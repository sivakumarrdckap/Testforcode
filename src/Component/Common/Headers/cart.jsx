import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayCart } from "./../../../redux/actions";
import { AiFillCloseCircle } from "react-icons/ai";
import { updateCart } from "./../../../redux/actions";
import axios from "axios";
import Swal from "sweetalert2";
import PopupModal from "../../Pages/Products/files/popupModal";

export default function Cart() {
    const dispatch = useDispatch();
    let history = useHistory();
    const display_cart = useSelector((state) => state.display_cart);
    const cart_data = useSelector((state) => state.update_cart);
    const [totalQty, setTotalQty] = useState(0);
    const [activeOptionDisplay, setActiveOptionDisplay] = useState([]);
    const customertoken = useSelector((state) => state.customer_token);
    const [open, setOpen] = useState(false);
    const [click, setclick] = useState(null);
    const [loading, setloading] = useState(false);
    const [checkoutItemsData, setCheckoutItemsData] = useState({});
    let tempQty = 0;
    let subtotal = 0;

    cart_data.length &&
        cart_data.map((val) => {
            tempQty += parseInt(val.qty);
            return null;
        });
    tempQty !== totalQty && setTotalQty(tempQty);

    useEffect(() => {
        return () => {
            dispatch(displayCart(false));
        };
    }, []);

    const updateFieldChanged =
        (name, index) =>
        ({ target: { value } }) => {
            let newArr = [...cart_data];
            newArr[index][name] = value > 0 ? value : 1;
            dispatch(updateCart(newArr));
        };

    //Getting cart info
    useEffect(() => {
        if (customertoken) {
            axios
                .get(process.env.REACT_APP_MAGENTO_URI + "carts/mine/items", {
                    headers: {
                        Authorization: "Bearer " + customertoken,
                    },
                })
                .then((res) => {
                    dispatch(updateCart(res.data));
                })
                .catch((err)=>{
                history.push('/');
                dispatch(updateCart(''));
                // Swal.fire('Error','Error in getting the cart','error');
                console.log(err);
                })
        }
    }, []);

    //Function to remove Item
    const deleteItem = (id, name, i) => {
        if (customertoken) {
            setloading(true);
            axios
                .delete(
                    `${process.env.REACT_APP_MAGENTO_URI}carts/mine/items/${id}`,
                    {
                        headers: {
                            Authorization: "Bearer " + customertoken,
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
                                cart_data.filter(
                                    (item) => item !== cart_data[i]
                                )
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
                updateCart(cart_data.filter((item) => item !== cart_data[i]))
            );
        }
    };

    //condition to check whether the user is logged in to go to checkout page.
    const handleCheckout = () => {
        customertoken ? history.push("/checkout") : setOpen(true);
    };

    //closing the modal
    const onCloseModal = () => {
        setOpen(false);
    };

    useEffect(() => {
        setloading(true)
        cart_data && cart_data.map(({ sku }) => {
            const needSku  = sku?.split('-')[0];
            console.log("s" , needSku)
            axios.get("https://headlessdev.elementvape.com/api/imageFromSku/"+`${needSku}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            ).then((res) => {
                if (res.status === 200) {
                    setCheckoutItemsData((checkoutItemsData) => ({
                        ...checkoutItemsData,
                        [sku]: res.data
                    }));
                    setloading(false)
                }
            })
            .catch((err) => {
                Swal.fire("Oops!",err?.response?.data?.message? err.response.data.message : err.message, "error");
                setloading(false)
            });
        });
    }, [cart_data])

    return (
        <>
            <li className="min-cart ev-cart">
                <i
                    onClick={() => {
                        dispatch(displayCart(!display_cart));
                    }}
                    className="fas fa-shopping-cart"
                />
                <span className="count">{totalQty}</span>
                <div className={`mini-cart ${display_cart && "show-cart"}`}>
                    <div className="header">
                        <span>Your Cart</span>{" "}
                        {cart_data.length ? (
                            <>
                                <strong>{totalQty}</strong>items
                            </>
                        ) : null}
                    </div>
                    <hr />
                    <div
                        className={`cart-body ${
                            !cart_data.length && "no-items"
                        }`}
                    >
                        {cart_data?.length ? (
                            cart_data?.map((val, i) => {
                                subtotal +=
                                    parseFloat(val.price) * parseInt(val.qty);
                                return (
                                    <div
                                        className="row "
                                        style={{ position: "relative" }}
                                    >
                                        <div className="img-container col-4 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                            {/* <img
                                                src={`https://dev3.elementvape.com/pub/media/catalog/product${val.media_gallery_entries}`}
                                                alt=""
                                                srcset=""
                                                width="100%"
                                            /> */}
                                             <img  className="checkout_list_image"
                                                src={"https://www.elementvape.com/pub/media/catalog/product/"+checkoutItemsData[val?.sku]}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src =
                                                        "https://media-exp1.licdn.com/dms/image/C4E0BAQGCxDCu0bp79g/company-logo_200_200/0/1551996792494?e=2159024400&v=beta&t=HqzCn3HBlKheQkOfGWr1puewT-VLyaufAEKo0frBh8Q";
                                                }}
                                            />
                                            <span
                                                onClick={() => {
                                                    deleteItem(
                                                        val.item_id,
                                                        val.name,
                                                        i
                                                    );
                                                    setclick(i);
                                                }}
                                                className="close"
                                            >
                                                <AiFillCloseCircle />
                                            </span>
                                        </div>
                                        <div className="col-8 col-xs-12 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                                            <div className="row">
                                                <div className="col-7 col-xs-12 col-sm-6 col-md-7 col-lg-7 col-xl-7">
                                                    <div className="title">
                                                        {val.name}
                                                    </div>
                                                    {/* <div
                                                        onClick={() => {
                                                            if (
                                                                activeOptionDisplay.includes(
                                                                    i
                                                                )
                                                            ) {
                                                                setActiveOptionDisplay(
                                                                    (
                                                                        activeOptionDisplay
                                                                    ) =>
                                                                        activeOptionDisplay.map(
                                                                            (
                                                                                val
                                                                            ) => {
                                                                                if (
                                                                                    val !==
                                                                                    i
                                                                                )
                                                                                    return val;
                                                                            }
                                                                        )
                                                                );
                                                            } else {
                                                                setActiveOptionDisplay(
                                                                    (
                                                                        activeOptionDisplay
                                                                    ) => [
                                                                        ...activeOptionDisplay,
                                                                        i,
                                                                    ]
                                                                );
                                                            }
                                                        }}
                                                        className="details"
                                                    >
                                                        See Details
                                                    </div> */}

                                                    {activeOptionDisplay.includes(
                                                        i
                                                    ) && (
                                                        <div className="details-body">
                                                            {Object.keys(
                                                                val.option_type_data
                                                            ).map((key) => {
                                                                return (
                                                                    <div className="detail">
                                                                        <strong>
                                                                            {key.replace(
                                                                                /_/g,
                                                                                " "
                                                                            )}
                                                                        </strong>
                                                                        <small>
                                                                            {
                                                                                val
                                                                                    .option_type_data[
                                                                                    key
                                                                                ]
                                                                                    .title
                                                                            }
                                                                        </small>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-5 col-xs-12 col-sm-6 col-md-5 col-lg-5 col-xl-5">
                                                    <div className="price">
                                                        $
                                                        {parseFloat(
                                                            val.price
                                                        ).toFixed(2)}
                                                    </div>
                                                    <div className="qty">
                                                        <label htmlFor="qty">
                                                            QTY
                                                        </label>
                                                        <input
                                                            id="qty"
                                                            value={val.qty}
                                                            type="number"
                                                            onChange={updateFieldChanged(
                                                                "qty",
                                                                i
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className={click === i && loading ? 'loading-border': null}></div> */}
                                    </div>
                                );
                            })
                        ) : (
                            <div>
                                <p>You have no items in your shopping cart.</p>
                            </div>
                        )}
                    </div>
                    {cart_data.length ? (
                        <div className="footer">
                            <div className="subtotal">
                                <span>CART SUBTOTAL :</span>
                                <span> $ {subtotal.toFixed(2)} </span>
                            </div>
                            <div className="mini_cart_btn_wrap">
                                <button
                                    className="view_cart"
                                    onClick={() => {
                                        history.push("/cartpage");
                                    }}
                                    disabled={
                                        customertoken &&
                                        cart_data[cart_data.length - 1].local
                                            ? true
                                            : false
                                    }
                                >
                                    View Cart
                                </button>
                                <button
                                    className="mini_checkout_btn"
                                    onClick={() => {
                                        handleCheckout();
                                    }}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </li>
            {!customertoken && open && (
                <div>
                    <PopupModal
                        onCloseModal={onCloseModal}
                        open={open}
                        setOpen={setOpen}
                        error="loginPopup"
                    />
                </div>
            )}
        </>
    );
}
