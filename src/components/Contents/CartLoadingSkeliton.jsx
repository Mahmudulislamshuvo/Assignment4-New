const CartLoadingSkeliton = () => {
  return (
    <>
      <div class="soft-card overflow-hidden">
        <div class="aspect-square bg-slate-100 animate-pulse"></div>
        <div class="p-4 space-y-3">
          <div class="h-4 bg-slate-200 rounded animate-pulse"></div>
          <div class="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
          <div class="h-4 bg-slate-200 rounded animate-pulse w-2/3"></div>
          <div class="h-4 bg-slate-200 rounded animate-pulse w-1/2"></div>
          <button
            class="w-full bg-slate-200 text-white py-2 rounded-lg font-medium mt-2 animate-pulse"
            disabled
          ></button>
        </div>
      </div>
    </>
  );
};

export default CartLoadingSkeliton;
