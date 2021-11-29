import { display_cart, update_cart } from "./cart";
import { veratad } from "./veratad";
import {
    customer_token,
    customer_details,
    customer_email,
    display_user,
    customer_cart_id
} from "./customerToken";
import {coupon, updateCoupon} from "./coupon";
import { newCheckoutAddress,newCheckoutBillingAddress } from "./address";
import { checkoutItem } from "./checkout";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
    display_cart,
    update_cart,
    veratad,
    customer_token,
    customer_details,
    customer_email,
    display_user,
    coupon,
    updateCoupon,
    customer_cart_id,
    newCheckoutAddress,
    newCheckoutBillingAddress,
    checkoutItem
});

export default combinedReducer;
