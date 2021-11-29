export const customer_token = (state = "", action) => {
    switch (action.type) {
        case "CUATOMER_TOKEN":
            return (state = action.val);
        default:
            return state;
    }
};

export const customer_details = (state = {}, action) => {
    switch (action.type) {
        case "CUSTOMER_DETAILS":
            return (state = action.val);
        default:
            return state;
    }
};

export const customer_email = (state = "", action) => {
    switch (action.type) {
        case "CUSTOMER_EMAIL":
            return (state = action.val);
        default:
            return state;
    }
};

export const display_user = (state = false, action) => {
    switch (action.type) {
        case "DISPLAY_USER":
            return (state = action.val);
        default:
            return state;
    }
};

export const customer_cart_id = (state = {}, action) => {
    switch (action.type) {
        case "CUSTOMER_CART_ID":
            return (state = action.val);
        default:
            return state;
    }
};
