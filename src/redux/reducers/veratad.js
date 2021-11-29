export const veratad = (state = false, action) => {
    switch (action.type) {
        case "SET_VERATAD_TRUE":
            return (state = true);
        default:
            return state;
    }
};
