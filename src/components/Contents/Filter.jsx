const Filter = ({
  data,
  selectedCategories,
  handleCategoryChange,
  selectedPrice,
  handlePriceChange,
  selectedRating,
  handleRatingChange,
  clearFilters,
}) => {
  const categories = data?.data
    ? [...new Set(data.data.map((p) => p.category))]
    : [];
  const ratings = [4.5, 4.0, 3.5];
  const prices = ["0-2000", "2000-5000", "5000-10000"];

  return (
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            className="text-xs text-rose-500 font-semibold"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
          <div className="space-y-2">
            {categories?.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300"
                />
                <span className="ml-3 text-sm text-slate-700">{category}</span>
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
            {prices.map((price) => (
              <label key={price} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice === price}
                  onChange={() => handlePriceChange(price)}
                  className="w-4 h-4 text-rose-500"
                />
                <span className="ml-3 text-sm text-slate-700">${price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label key={rating} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={selectedRating === rating}
                  onChange={() => handleRatingChange(rating)}
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
