import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './basketSlice';
import favReducer from "./favSlice";

const basketMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith('basket/')) {
        const basketState = store.getState().basket;
        localStorage.setItem('basket', JSON.stringify(basketState));
    }

    return result;
};

const favMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith('fav/')) {
        const favState = store.getState().fav;
        localStorage.setItem('fav', JSON.stringify(favState));
    }

    return result;
};

export default configureStore({
    reducer: {
        basket: basketReducer,
        fav: favReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(basketMiddleware).concat(favMiddleware)
});