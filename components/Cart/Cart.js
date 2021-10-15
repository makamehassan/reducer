import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartData=useSelector(state=>state.manageCart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartData.map(item=>( <CartItem
            item={{ title: item.title, quantity: item.itemQuantity, total: item.itemTotalPrice, price: item.price ,id:item.id}}
          />))
        }
       
      </ul>
    </Card>
  );
};

export default Cart;
