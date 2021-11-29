export const newCheckoutAddress = (state = {}, action) => {
    switch (action.type) {
        case "NEW_CHECKOUT_ADDRESS":
            return (state = action.data);
        default:
            return state;
    }
};

export const newCheckoutBillingAddress = (state ={}, action) => {
    switch (action.type) {
        case "NEW_CHECKOUT_BILLING_ADDRESS":
            return (state = action.data);
        default:
            return state;
    }
};