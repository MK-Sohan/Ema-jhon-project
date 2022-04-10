import React from "react";
import Usecart from "../../Hooks/UseCart";
import UseProducts from "../../Hooks/UseProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = UseProducts();
  const [cart, setCart] = Usecart(products);

  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  return (
    <div className="shope-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handleRemove={handleRemove}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <h1>We are inside order page</h1>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
