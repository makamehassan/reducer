import { useDispatch } from 'react-redux';
import { manageCartActions } from '../../store/manageCart';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch=useDispatch()
  const { title, quantity, total, price ,id} = props.item;
const removeCartHandler=()=>{
dispatch(manageCartActions.removeItem({id}))
}
const addCartHandler=()=>{
dispatch(manageCartActions.addItem({id}))
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
