import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import {toggleCartActions} from "../../store/toggleCart"
const CartButton = (props) => {
  const totalQuantity=useSelector(state=>state.manageCart.totalQuantity)
const dispatch=useDispatch()
const showCartHandler=()=>{
 dispatch(toggleCartActions.toggleTheCart())
}
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
