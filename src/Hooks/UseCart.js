import { useEffect, useState } from "react";
import { getstoredCart } from "../utilities/fakedb";

const Usecart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const StoredCart = getstoredCart();
    const savedCart = [];
    for (const id in StoredCart) {
      const addedproduct = products.find((product) => product.id === id);
      if (addedproduct) {
        const quantity = StoredCart[id];
        addedproduct.quantity = quantity;
        savedCart.push(addedproduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};

export default Usecart;
