import React, { useContext } from "react";
import ItemsCart from "./ItemsCart";
import CheckoutForm from "./CheckoutForm";
import { ProductContext } from "../../context";

const CheckoutAndCartList = () => {
  const { cart, setCart } = useContext(ProductContext);

  console.log(cart);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ItemsCart setCart={setCart} cart={cart} />
        <CheckoutForm />
      </div>
    </>
  );
};

export default CheckoutAndCartList;
