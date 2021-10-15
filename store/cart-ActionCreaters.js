import axios from "axios"
import { toggleCartActions } from "./toggleCart"

//why is not passed at the top func
const client=axios.create({
    baseURL:"https://redux-feabe-default-rtdb.firebaseio.com/cartDetails.json/"
})
export const sendCartData=(cart)=>{
    return async (dispatch)=>{
dispatch( 
    toggleCartActions.notification( {
        title:"PENDING...",
        message:"sending cart...."
    }
)
)
const sendCart=async (cart)=>{
 const res=await client.post(cart)
 return res
}
try {
    await sendCart()
    dispatch(  toggleCartActions.notification( {
        title:"SUCCESS...",
        message:"sending cart datais successfull"
    }))
} catch (error) {
    console.log(error.message)
    dispatch(  toggleCartActions.notification( {
        title:"FAILED...",
        message:"sending cart data has failed"
    }))
}

    }
}