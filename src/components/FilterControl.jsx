const FilterControls = ({ categories, selectedCategory, sortOrder, onCategoryChange, onSortChange }) => (
  <div className="filter-controls">
    <div className="filter-group">
      <label>Category:</label>
      <select
        className="filter-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>

    <div className="filter-group">
      <label>Sort by Price:</label>
      <select
        className="filter-select"
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">Default</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  </div>
);

export default FilterControls;
