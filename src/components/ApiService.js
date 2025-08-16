export const ApiService = {
  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },

  async fetchCategories() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      return await response.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }
};
