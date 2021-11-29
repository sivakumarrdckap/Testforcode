export const checkoutItem = (state = [], action) => {
    switch (action.type) {
        case "CHECKOUT_ITEMS":
            return (state = action.val);
        default:
            return state;
    }
};
