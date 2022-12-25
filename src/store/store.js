import { configureStore } from "@reduxjs/toolkit";
import parcelReducer from './parcelSlice'
import cartReducer from './cartSlice'

const store = configureStore({
    reducer: {
        parcel: parcelReducer,
        cart: cartReducer
    }
})

export default store;