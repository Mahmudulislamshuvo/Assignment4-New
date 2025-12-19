import { useGetAllProductQuery } from "../../Features/Api/ProductApi";
import { useState, useContext } from "react";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";
import { ProductContext } from "../../context";

const Contents = () => {
  const { data } = useGetAllProductQuery();
  // console.log(data);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const { searchTerm } = useContext(ProductContext);

  // Handle Category Change
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Handle Price Change
  const handlePriceChange = (priceRange) => {
    setSelectedPrice(priceRange);
  };

  // Handle Rating Change
  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  // Clear All Filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice("");
    setSelectedRating(null);
  };

  // Filtering Logic
  const filterProducts = () => {
    if (!data?.data) return [];

    let filtered = [...data.data];

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    if (selectedPrice) {
      const [min, max] = selectedPrice.split("-");
      filtered = filtered.filter(
        (product) =>
          product.price >= parseInt(min) && product.price <= parseInt(max)
      );
    }
    if (selectedRating) {
      filtered = filtered.filter(
        (product) => product.rating_rate >= selectedRating
      );
    }

    return filtered;
  };
  const filteredProducts = filterProducts();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Filter
          data={data}
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
          selectedPrice={selectedPrice}
          handlePriceChange={handlePriceChange}
          selectedRating={selectedRating}
          handleRatingChange={handleRatingChange}
          clearFilters={clearFilters}
        />

        <ProductGrid data={{ data: filteredProducts }} />
      </div>
    </>
  );
};

export default Contents;
