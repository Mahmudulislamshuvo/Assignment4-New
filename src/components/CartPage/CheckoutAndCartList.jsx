import React from "react";
import ItemsCart from "./ItemsCart";
import CheckoutForm from "./CheckoutForm";

const CheckoutAndCartList = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ItemsCart />
        <CheckoutForm />
      </div>
    </>
  );
};

export default CheckoutAndCartList;
