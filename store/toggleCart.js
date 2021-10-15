import { createSlice } from "@reduxjs/toolkit";


const toggleCart=createSlice({
name:"toggleCart",
initialState:{showCart:false,notification:null},
reducers:{
    toggleTheCart(state){
state.showCart=!state.showCart;
    },
    notification(state,action){
        state.notification=action.payload
    }
}
})
export const toggleCartActions= toggleCart.actions
export const toggleCartReducer=toggleCart.reducer