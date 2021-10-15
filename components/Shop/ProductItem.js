
import { useDispatch} from 'react-redux';

import { manageCartActions } from '../../store/manageCart';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
 
 const dispatch= useDispatch()
  const { title, price, description,id } = props;
const addToCartHandler=()=>{
dispatch( manageCartActions.addItem( {
title,
price,
description,
id,
itemQuantity:1,
itemTotalPrice:price
}))

}
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
