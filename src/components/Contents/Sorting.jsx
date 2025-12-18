const Sorting = ({ sortOption, onSortChange, totalProducts }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-slate-600">Showing {totalProducts} products</p>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium text-slate-700">
          Sort by:
        </label>

        <select
          id="sort"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
