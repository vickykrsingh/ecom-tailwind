import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../redux/slices/cartSlice'

function AddToCartButton({cartItem}) {
    const dispatch = useDispatch()
    const setCartItem = (cart) => {
        dispatch(addCartItem(cart))
    }
  return ( 
    <button onClick={()=>setCartItem(cartItem)} className="btn btn-outline z-[99]">Add to cart</button>
  )
}

export default AddToCartButton