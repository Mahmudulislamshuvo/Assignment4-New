import { useState } from "react";
import { ProductContext } from "../context";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default CartProvider;
