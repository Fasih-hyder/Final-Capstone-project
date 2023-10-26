import counterReducer from '../functins/functins'

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
reducer:{
    cart:counterReducer,
}
    })