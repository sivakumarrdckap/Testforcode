import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Quantity({ qty, setQty }) {
    return (
        <div className="product-options-qty">
            <label className="label" htmlFor="qty">
                <span>Qty</span>
            </label>
            <div className="cart-qty">
                <div className="qty-ctl minus">
                    <button
                        onClick={() =>
                            setQty((qty) => (qty - 1 ? qty - 1 : qty))
                        }
                        type="button"
                        className="decrease"
                    >
                        <i>
                            <AiOutlineMinus />
                        </i>
                        <span>Decrease</span>
                    </button>
                </div>
                <input
                    type="number"
                    className="qty"
                    name="qty"
                    value={qty}
                    title="Qty"
                />
                <div className="qty-ctl plus">
                    <button
                        onClick={() => setQty((qty) => qty + 1)}
                        type="button"
                        className="increase"
                    >
                        <i>
                            <AiOutlinePlus />
                        </i>
                        <span>Increase</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
