import { createSlice } from "@reduxjs/toolkit";


const manageCart=createSlice({
name:"cartManager",
initialState:{
items:[],
totalQuantity:0
},
reducers:{
    addItem(state,action){
     const existingItem=state.items.find(item=>item.id === action.payload.id)
if(!existingItem){
    state.items.push(action.payload)
    state.totalQuantity++
    return
}
existingItem.itemQuantity++
existingItem.itemTotalPrice += existingItem.price
state.totalQuantity++
    },
    removeItem(state,action){
        
        const existingItem=state.items.find(item=>item.id === action.payload.id)
        if(existingItem.itemQuantity >1){
            existingItem.itemQuantity--;
            existingItem.itemTotalPrice -= existingItem.price;
            state.totalQuantity--
            return
        }
        state.items=state.items.filter(item=>item.id !== existingItem.id);
        state.totalQuantity--
       
    }
}
})
export const manageCartActions=manageCart.actions
export const manageCartReducer=manageCart.reducer