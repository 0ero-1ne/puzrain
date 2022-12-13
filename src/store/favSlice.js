import { createSlice } from "@reduxjs/toolkit";

const reHydrateStore = () => {
    if (localStorage.getItem('fav') !== null) {
        return JSON.parse(localStorage.getItem('fav')); // re-hydrate the store
    }

    return {
        fav: [],
    };
};

const favSlice = createSlice({
    name: 'fav',
    initialState: reHydrateStore(),
    reducers: {
        addProductToFav(state, action) {
            const itemInFav = state.fav.find(product => product._id === action.payload.product._id);
            if (!itemInFav) {
                state.fav.push({...action.payload.product});
            }
        },
        removeProductFromFav(state, action) {
            state.fav = state.fav.filter(product => product._id !== action.payload.product._id);
        }
    },
});

export const {addProductToFav, removeProductFromFav} = favSlice.actions;
export default favSlice.reducer;