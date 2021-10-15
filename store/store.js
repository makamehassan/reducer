import { configureStore } from "@reduxjs/toolkit";
import { manageCartReducer } from "./manageCart";
import { toggleCartReducer } from "./toggleCart";


export const store=configureStore({
    reducer:{
        toggleCart:toggleCartReducer,
        manageCart:manageCartReducer
    }
})