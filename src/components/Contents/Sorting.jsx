import React from "react";

const Sorting = () => {
  return (
    <>
      <div class="flex items-center justify-between mb-6">
        <p class="text-slate-600">Showing 12 products</p>
        <div class="flex items-center gap-2">
          <label for="sort" class="text-sm font-medium text-slate-700">
            Sort by:
          </label>
          <select
            id="sort"
            class="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sorting;
