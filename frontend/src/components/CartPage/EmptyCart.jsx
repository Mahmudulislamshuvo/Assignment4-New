const EmptyCart = () => {
  return (
    <div className="lg:col-span-2 flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl border border-slate-200 border-dashed min-h-[400px]">
      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
        <span className="text-4xl">🛒</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        Your cart is empty
      </h3>
      <p className="text-slate-500 max-w-sm mx-auto mb-6">
        Looks like you haven't added any items to the cart yet. Explore our
        products and find something you love!
      </p>
      {/* <a
        href="/"
        className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg transition-colors shadow-sm shadow-rose-200"
      >
        Start Shopping
      </a> */}
    </div>
  );
};

export default EmptyCart;
