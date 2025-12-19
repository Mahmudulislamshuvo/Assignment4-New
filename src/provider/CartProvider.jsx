import { useState } from "react";
import { ProductContext } from "../context";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ProductContext.Provider
      value={{ cart, setCart, searchTerm, setSearchTerm }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default CartProvider;
