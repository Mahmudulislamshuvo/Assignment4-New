const Filter = ({ filters, onFilterChange, onClear }) => {
  return (
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            onClick={onClear}
            className="text-xs text-rose-500 font-semibold"
          >
            Clear
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
          <div className="space-y-2">
            {/* আমি এখানে ভ্যালুগুলো তোমার ডাটাবেসের নামের সাথে মিল রেখে দিচ্ছি */}
            {["Laptop", "Gaming Laptop", "Workstation"].map((cat) => (
              <label key={cat} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => onFilterChange("category", cat)}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span className="ml-3 text-sm text-slate-700">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">
            Price Range
          </h4>
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.price.includes("low")}
                onChange={() => onFilterChange("price", "low")}
                className="w-4 h-4 text-rose-500"
              />
              <span className="ml-3 text-sm text-slate-700">$0 - $2000</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.price.includes("mid")}
                onChange={() => onFilterChange("price", "mid")}
                className="w-4 h-4 text-rose-500"
              />
              <span className="ml-3 text-sm text-slate-700">$2000 - $5000</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.price.includes("high")}
                onChange={() => onFilterChange("price", "high")}
                className="w-4 h-4 text-rose-500"
              />
              <span className="ml-3 text-sm text-slate-700">$5000+</span>
            </label>
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
          <div className="space-y-2">
            {[4.5, 4.0, 3.5].map((rating) => (
              <label key={rating} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.rating.includes(rating)}
                  onChange={() => onFilterChange("rating", rating)}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span className="ml-3 text-sm text-slate-700">
                  {rating} ⭐ & up
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
