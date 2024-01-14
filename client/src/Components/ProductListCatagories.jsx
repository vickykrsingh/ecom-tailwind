// import { products } from "../../public/data"
import { useSelector } from "react-redux"
import ProductList from "./ProductList"
import { useEffect, useState } from "react"
export default function ProductListCategories() {
  const products = useSelector((state)=>state.productReducer.products)
    return (
      <>
        <ProductList product={products} heading={'All Products : '} />
      </>
    )
  }