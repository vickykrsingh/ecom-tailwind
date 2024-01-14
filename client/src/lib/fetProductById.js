import { products } from "../../public/data";
export const fetchProductById = (id) => {
  try {
    const p = products.filter((p) => p.id == id);
    return p[0];
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductByCategory = (category) => {
  try {
    const filteredProducts = products.filter((product) =>
      product.category.some((c) => category.includes(c))
    );
    return filteredProducts;
  } catch (error) {
    console.log(error);
  }
};
export const fetchProductByPrice = (price) => {
  try {
    const filteredProducts = products.filter(
      (product) => product.price <= price
    );
    return filteredProducts;
  } catch (error) {
    console.log(error);
  }
};
export const fetchProductByCategoryAndPrice = (category, price) => {
  try {
    const filteredProducts = products.filter(
      (product) =>
        product.category.some((c) => category.includes(c)) &&
        product.price <= price
    );
    return filteredProducts;
  } catch (error) {
    console.log(error);
  }
};
export const fetchAllProduct = () => {
    try {
        return products;
    } catch (error) {
        console.log(error)
    }
}
