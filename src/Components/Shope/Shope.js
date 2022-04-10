import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getstoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shope.css";
const Shope = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  useEffect(() => {
    const storedCart = getstoredCart();

    const savedcart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        // console.log(addedProduct);
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedcart.push(addedProduct);
      }
    }

    setCart(savedcart);
  }, [products]);

  const handleAddTocart = (selectedproduct) => {
    // console.log(product);
    let newCart = [];
    const exist = cart.find((product) => product.id === selectedproduct.id);
    if (!exist) {
      selectedproduct.quantity = 1;
      newCart = [...cart, selectedproduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedproduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDb(selectedproduct.id);
  };
  // const handleAddTocart=(product)=>{
  //     // console.log(product);
  //     const newCart = [...cart,product];
  //     setCart(newCart);
  //     addToDb(product.id)
  // }

  return (
    <div className="shope-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddTocart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          {/* <Link to="/order">
            <button>Revew order</button>
          </Link> */}
        </Cart>
      </div>
    </div>
  );
};

export default Shope;
