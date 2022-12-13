import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './basketSlice';

const basketMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith('basket/')) {
        const basketState = store.getState().basket;
        localStorage.setItem('basket', JSON.stringify(basketState));
    }

    return result;
};

export default configureStore({
    reducer: {
        basket: basketReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(basketMiddleware)
});