import { useState, useEffect } from "react";
import { ApiService } from "./components/ApiService";
import LoadingSpinner from "./components/LoadingSpinner";
import FilterControls from "./components/FilterControl";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetails";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        ApiService.fetchProducts(),
        ApiService.fetchCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
      setFilteredProducts(productsData);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (sortOrder === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortOrder]);

  const handleProductClick = (product) => setSelectedProduct(product);
  const handleBackToProducts = () => setSelectedProduct(null);

  if (loading) return <LoadingSpinner />;

  return (
    <div style={{ minHeight: "100vh" }}>
      <header className="header">
        <div className="container">
          <h1>Abhay Store</h1>
        </div>
      </header>

      <main className="container" style={{ paddingTop: "24px", paddingBottom: "40px" }}>
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
        ) : (
          <>
            <FilterControls
              categories={categories}
              selectedCategory={selectedCategory}
              sortOrder={sortOrder}
              onCategoryChange={setSelectedCategory}
              onSortChange={setSortOrder}
            />
            <div className="products-info">Showing {filteredProducts.length} products</div>
            <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
