import Filter from "./Filter";
import ProductGrid from "./ProductGrid";

const Contents = () => {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* <!-- Sidebar Filters --> */}
        <Filter />

        {/* <!-- Products Grid --> */}
        <ProductGrid />
      </div>
    </>
  );
};

export default Contents;
