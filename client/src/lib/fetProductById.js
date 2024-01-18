import { products } from "../../public/data";
export const fetchProductById = (id) => {
  try {
    const p = products.filter((p) => p.id == id);
    return p[0];
  } catch (error) {
    return []
  }
};

export const fetchProductByCategory = (category, { start = 0, end = 0 }) => {
  start = start - 1;
  try {
    let filteredProducts = products.filter((product) =>
      product.category.some((c) => category.includes(c))
    );
    const totalProduct = filteredProducts.length
    filteredProducts = filteredProducts.filter(
      (p, i) => i >= start * 12 && i < end * 12
    );
    filteredProducts = filteredProducts.reverse();
    return {filteredProducts,totalProduct};
  } catch (error) {
    return []
  }
};
export const fetchProductByPrice = (price, { start = 0, end = 0 }) => {
  start = start - 1;
  try {
    let filteredProducts = products.filter((product) => product.price <= price);
    const totalProducts = filteredProducts.length
    filteredProducts = filteredProducts.slice(start * 12, end * 12);
    filteredProducts = filteredProducts.reverse();

    return {filteredProducts,totalProducts};
  } catch (error) {
    return []
  }
};
export const fetchProductByCategoryAndPrice = (
  category,
  price,
  { start = 0, end = 0 }
) => {
  start = start - 1;
  try {
    let filteredProducts = products.filter(
      (product) =>
        product.category.some((c) => category.includes(c)) &&
        product.price <= price
    );
    const totalProduct = filteredProducts.length
    filteredProducts = filteredProducts.slice(start * 12, end * 12);
    filteredProducts = filteredProducts.reverse();
    return {filteredProducts,totalProduct};
  } catch (error) {
    return []
  }
};
export const fetchAllProduct = () => {
  try {
    const onePageProducts = products.filter((p, i) => i < 12);
    const totalProduct = products.length
    return {onePageProducts,totalProduct};
  } catch (error) {
    return []
  }
};


export const fetchProductByKeyword = (text) => {
  try {
    const searchedProduct = products.filter((p) =>
    p.category.some((c) => c === text) || p.title.includes(text) || p.description.includes(text)
  );
    const totalProduct = searchedProduct.length
    return {searchedProduct,totalProduct}
  } catch (error) {
    return []
  }
}