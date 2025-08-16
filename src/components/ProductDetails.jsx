const ProductDetail = ({ product, onBack }) => (
  <div className="product-detail">
    <div className="product-detail-content">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>
      <div className="product-detail-grid">
        <div className="product-detail-image-container">
          <img src={product.image} alt={product.title} className="product-detail-image" />
        </div>
        <div className="product-detail-info">
          <div>
            <div className="product-category">{product.category}</div>
            <h1 className="product-detail-title">{product.title}</h1>
          </div>
          <div className="product-detail-price-rating">
            <span className="product-detail-price">${product.price}</span>
            <div className="product-detail-rating">
              <span>⭐ {product.rating.rate}</span>
              <span className="rating-count">({product.rating.count} reviews)</span>
            </div>
          </div>
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <div className="product-actions">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-secondary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetail;
