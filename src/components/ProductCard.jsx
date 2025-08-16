const ProductCard = ({ product, onProductClick }) => (
  <div className="product-card" onClick={() => onProductClick(product)}>
    <div className="product-image-container">
      <img src={product.image} alt={product.title} className="product-image" />
    </div>
    <div className="product-info">
      <div className="product-category">{product.category}</div>
      <h3 className="product-title">{product.title}</h3>
      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <div className="product-rating">⭐ {product.rating.rate}</div>
      </div>
    </div>
  </div>
);

export default ProductCard;
