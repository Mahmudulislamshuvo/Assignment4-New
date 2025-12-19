import EmptyCart from "./EmptyCart";

const ItemsCart = ({ cart, setCart }) => {
  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="lg:col-span-2">
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="soft-card p-4 flex gap-4">
            <img
              src={import.meta.env.VITE_API_BASE_URL + item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-lg bg-slate-100"
            />

            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Category: {item.category}
                  </p>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-slate-400 hover:text-rose-500"
                  aria-label="Remove"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300"
                    disabled={item.quantity === 1}
                  >
                    −
                  </button>

                  <span className="text-sm font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300"
                  >
                    +
                  </button>
                </div>

                <span className="text-2xl font-bold text-slate-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsCart;
