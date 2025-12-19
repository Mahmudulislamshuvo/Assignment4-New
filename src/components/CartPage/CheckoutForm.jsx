const CheckoutForm = ({ cart }) => {
  // 1. Calculate Subtotal: Sum of (price * quantity) for all items
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 2. Calculate Tax: (Set to 0 for now based on your design, but you can add logic here)
  const tax = 0;
  // Example for 5% tax: const tax = subtotal * 0.05;

  // 3. Calculate Grand Total
  const total = subtotal + tax;

  return (
    <div className="lg:col-span-1">
      <div className="soft-card p-6 sticky top-24 space-y-6">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

        {/* */}
        <div className="space-y-3 border-slate-200">
          {/* Subtotal */}
          <div className="flex justify-between text-slate-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between text-slate-600">
            <span>Shipping</span>
            <span className="text-emerald-600 font-semibold">Free</span>
          </div>

          {/* Tax */}
          <div className="flex justify-between text-slate-600">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 my-2"></div>

          {/* Total */}
          <div className="flex justify-between text-xl font-bold pt-3 text-slate-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Checkout Button (Optional addition based on context) */}
          <button className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm shadow-rose-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
