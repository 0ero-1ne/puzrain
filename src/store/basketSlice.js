import { createSlice } from "@reduxjs/toolkit";

const reHydrateStore = () => {
    if (localStorage.getItem('basket') !== null) {
        return JSON.parse(localStorage.getItem('basket')); // re-hydrate the store
    }

    return {
        basket: [],
    };
};

const basketSlice = createSlice({
    name: 'basket',
    initialState: reHydrateStore(),
    reducers: {
        addProductToBasket(state, action) {
            const itemInBasket = state.basket.find(product => product._id === action.payload.product._id);
            if (itemInBasket) {
                itemInBasket.basketQty++
            } else {
                state.basket.push({...action.payload.product, basketQty: 1});
            }
        },
        removeProductFromBasket(state, action) {
            state.basket = state.basket.filter(product => product._id !== action.payload.product._id);
        },
        changeCount(state, action) {
            const itemInBasket = state.basket.find(product => product._id === action.payload.product._id);
            itemInBasket.basketQty = action.payload.qty === "" ? itemInBasket.basketQty : action.payload.qty;
        }
    },
});

export const {addProductToBasket, removeProductFromBasket, changeCount} = basketSlice.actions;
export default basketSlice.reducer;