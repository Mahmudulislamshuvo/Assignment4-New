import { useGetAllProductQuery } from "../../Features/Api/ProductApi";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";

const Contents = () => {
  const { data } = useGetAllProductQuery();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* <!-- Sidebar Filters --> */}
        <Filter data={data} />

        {/* <!-- Products Grid --> */}
        <ProductGrid data={data} />
      </div>
    </>
  );
};

export default Contents;
