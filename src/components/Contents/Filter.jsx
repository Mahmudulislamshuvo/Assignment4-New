import React from "react";

const Filter = () => {
  return (
    <>
      <div class="md:col-span-1 space-y-4">
        <div class="soft-card p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-slate-900">Filters</h3>
            <button class="text-xs text-rose-500 font-semibold">Clear</button>
          </div>

          {/* <!-- Category Filter --> */}
          <div class="mb-6">
            <h4 class="font-medium text-sm mb-3 text-slate-700">Category</h4>
            <div class="space-y-2">
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  class="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span class="ml-3 text-sm text-slate-700">Apple Mac Pro</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span class="ml-3 text-sm text-slate-700">Gaming Laptop</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span class="ml-3 text-sm text-slate-700">Workstation</span>
              </label>
            </div>
          </div>

          {/* <!-- Price Filter --> */}
          <div class="mb-6">
            <h4 class="font-medium text-sm mb-3 text-slate-700">Price Range</h4>
            <div class="space-y-2">
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="price"
                  class="w-4 h-4 text-rose-500"
                />
                <span class="ml-3 text-sm text-slate-700">$0 - $2000</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="price"
                  class="w-4 h-4 text-rose-500"
                />
                <span class="ml-3 text-sm text-slate-700">$2000 - $5000</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="price"
                  checked
                  class="w-4 h-4 text-rose-500"
                />
                <span class="ml-3 text-sm text-slate-700">$5000+</span>
              </label>
            </div>
          </div>

          {/* <!-- Rating Filter --> */}
          <div>
            <h4 class="font-medium text-sm mb-3 text-slate-700">Rating</h4>
            <div class="space-y-2">
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  class="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span class="ml-3 text-sm text-slate-700">4.5 ⭐ & up</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span class="ml-3 text-sm text-slate-700">4.0 ⭐ & up</span>
              </label>
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span class="ml-3 text-sm text-slate-700">3.5 ⭐ & up</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
