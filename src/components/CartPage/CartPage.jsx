import Tittle from "./Tittle";
import CheckoutAndCartList from "./CheckoutAndCartList";

const CartPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <Tittle />
      <CheckoutAndCartList />
    </div>
  );
};

export default CartPage;
