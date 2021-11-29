export const displayCart = (val) => {
    return {
        type: "DISPLAY_CART",
        val,
    };
};

export const displayUser = (val) => {
    return {
        type: "DISPLAY_USER",
        val,
    };
};

export const updateCart = (val) => {
    return {
        type: "UPDATE_CART",
        val,
    };
};

export const update_customer_cart_id = (val) => {
    return {
        type: "CUSTOMER_CART_ID",
        val,
    };
};

export const veratad_true = () => {
    return {
        type: "SET_VERATAD_TRUE",
    };
};

export const update_customer_token = (val) => {
    return {
        type: "CUATOMER_TOKEN",
        val,
    };
};

export const update_customer_email = (val) => {
    return {
        type: "CUSTOMER_EMAIL",
        val,
    };
};

export const update_customer_details = (val) => {
    return {
        type: "CUSTOMER_DETAILS",
        val,
    };
};

export const add_coupon = (val) => {
    return {
        type: "COUPON",
        val,
    };
};

export const update_coupon_data = (val) => {
    return {
        type: "UPDATE_COUPON",
        val,
    };
};

export const update_new_checkout_Address = (data) => {
    return {
        type: "NEW_CHECKOUT_ADDRESS",
        data,
    };
};

export const update_new_checkout_billing_address = (data)=>{
    return{
        type: "NEW_CHECKOUT_BILLING_ADDRESS",
        data
    }
}
export const update_checkout_option = (val) => {
    return {
        type: "CHECKOUT_ITEMS",
        val,
    };
};
