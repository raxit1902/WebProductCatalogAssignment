
import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "./services/productService";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import PriceRangeSlider from "./components/PriceRangeSlider";
import SortMenu from "./components/SortMenu";
import "./App.css";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    async function fetchData() {
      const fetchedCategories = await getCategories();
      const fetchedProducts = await getProducts();
      setCategories(fetchedCategories);
      setProducts(fetchedProducts);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [priceRange, products]);

  const handleCategorySelect = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filteredByCategory = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredByCategory);
    }
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    if (option === "price") {
      const sortedByPrice = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      setFilteredProducts(sortedByPrice);
    } else if (option === "discount") {
      const sortedByDiscount = [...filteredProducts].sort(
        (a, b) => a.price * 0.9 - b.price * 0.9
      );
      setFilteredProducts(sortedByDiscount);
    }
  };

  return (
    <div className="App">
      <div className="filters">
        <CategoryList
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
        <SortMenu onSortChange={handleSortChange} />
        <PriceRangeSlider onPriceChange={handlePriceChange} />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
