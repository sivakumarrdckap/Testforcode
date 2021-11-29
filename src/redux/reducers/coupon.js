export const coupon = (state = "", action) => {
    switch (action.type) {
        case "COUPON":
            return (state = action.val);
        default:
            return state;
    }
};

export const updateCoupon = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_COUPON":
            return (state = action.val);
        default:
            return state;
    }
};
