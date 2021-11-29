export const display_cart = (state = false, action) => {
    switch (action.type) {
        case "DISPLAY_CART":
            return (state = action.val);
        default:
            return state;
    }
};

export const update_cart = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_CART":
            return (state = action.val);
        default:
            return state;
    }
};
