import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData } from "./store/cart-ActionCreaters";
import Notification from "./components/UI/Notification"

let isInitial=true;
function App() {
  const showCart=useSelector(state=>state.toggleCart.showCart)
  const cart =useSelector(state=>state.manageCart)
  const notification=useSelector(state=>state.toggleCart.notification)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(isInitial){
      isInitial=false
      return
    }
    dispatch(sendCartData(cart))
  },[cart,dispatch])
  return (
    <>
  {notification && <Notification title={notification.title} message={notification.message}/>}
    <Layout>
     {showCart && <Cart />} 
      <Products />
    </Layout>
    </>
  );
}

export default App;
