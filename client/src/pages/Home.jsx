import React from 'react'
import FilterProduct from '../Components/FilterProduct'
import ProductListCategories from '../Components/ProductListCatagories'
import { setProduct } from '../redux/slices/productSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const action ={
  payload:"hello there"
}

function Home() {
  const dispatch = useDispatch(setProduct())
  const product = useSelector((state)=>state.productReducer)
  return (
    <>
    <FilterProduct/>
    <ProductListCategories/>

    </>
  )
}

export default Home