import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import formatDate from "../../hooks/formatDate";
import Sorting from "./Sorting";
import CartLoadingSkeliton from "./CartLoadingSkeliton";
import {
  useGetAllProductQuery,
  productApi,
} from "../../Features/Api/ProductApi";
import { ProductContext } from "../../context";
import { InfoToast, SuccessToast } from "../../utils/Toastify";

const ProductGrid = ({ data }) => {
  const dispatch = useDispatch();
  const { isLoading } = useGetAllProductQuery();
  const [sortOptions, setSortOptions] = useState("Newest");
  const { setCart } = useContext(ProductContext);

  const getSortedProducts = () => {
    // checking if no data
    if (!data?.data) return [];

    // copy of product array
    const products = [...data.data];

    // sorting logic
    switch (sortOptions) {
      case "Newest":
        return products.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "Oldest":
        return products.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "Price: Low to High":
        return products.sort((a, b) => a.price - b.price);
      case "Price: High to Low":
        return products.sort((a, b) => b.price - a.price);

      default:
        return products;
    }
  };

  const sortedProducts = getSortedProducts();

  const handleAddToCart = (product) => {
    if (product.stock <= 0) {
      InfoToast("This product is out of stock!");
      console.log("Click");

      return;
    }

    dispatch(
      productApi.util.updateQueryData("GetAllProduct", undefined, (draft) => {
        const productToUpdate = draft.data.find((p) => p.id === product.id);
        if (productToUpdate) {
          productToUpdate.stock -= 1;
        }
      })
    );
    SuccessToast("Product added to cart!");

    setCart((prevCart) => {
      const existProduct = prevCart.find((item) => item.id === product.id);

      if (existProduct) {
        if (existProduct.stock <= 0) {
          alert("No more stock available for this item!");
          return prevCart;
        }

        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, stock: item.stock - 1 }
            : item
        );
      }

      return [
        ...prevCart,
        { ...product, quantity: 1, stock: product.stock - 1 },
      ];
    });
  };

  return (
    <>
      <div className="md:col-span-3">
        {/* <!-- Sorting Options --> */}
        <Sorting
          sortOption={sortOptions}
          onSortChange={setSortOptions}
          totalProducts={sortedProducts.length}
        />

        {/* <!-- Products Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Product Card 1 --> */}
          {isLoading
            ? new Array(6)
                .fill(0)
                .map((_, index) => <CartLoadingSkeliton key={index} />)
            : sortedProducts?.map((product) => (
                <div
                  key={product.id}
                  className="soft-card overflow-hidden hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
                    <img
                      src={import.meta.env.VITE_API_BASE_URL + product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg text-slate-900 line-clamp-2">
                        {product.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-amber-500">
                        ⭐ {product.rating_rate}
                      </span>
                      <span className="text-slate-500">
                        ({product.rating_count} reviews)
                      </span>
                    </div>

                    {/* */}
                    <p className="text-slate-500 text-sm">
                      Upload on:{" "}
                      <span className="font-semibold">
                        {formatDate(product.createdAt)}
                      </span>
                    </p>

                    <p className="text-slate-600 text-sm line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                      <span className="text-sm text-emerald-600 font-medium">
                        In Stock ({product.stock})
                      </span>
                    </div>

                    <button
                      className="w-full button-primary py-2.5 rounded-lg font-semibold"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
