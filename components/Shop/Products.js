import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS=[
  {
    id:"b1",
    title:"Book-1",
    price:6,
    description:"my first favourite book"
  },
  {
    id:"b2",
    title:"Book-2",
    price:6,
    description:"my second favourite book"
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
     { 
     DUMMY_PRODUCTS.map(prod => ( <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          price={prod.price}
          description={prod.description}
        />))
     }
      </ul>
    </section>
  );
};

export default Products;
