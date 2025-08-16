import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onProductClick }) => (
  <div className="product-grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
    ))}
  </div>
);

export default ProductGrid;
