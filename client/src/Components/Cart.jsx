import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AmountToPay, totalCartValue, totalShippingCharge, totalTaxes} from '../lib/handleCart'
import { addCartItem, removeCartItem } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";


function Cart() {
  const cart = useSelector((state) => state.cartReducer.product);
  const dispatch = useDispatch()
  const removeQuantityFromCart = (product) => {
    dispatch(removeCartItem(product))
    toast('removed !', {
      icon: '😞'
    });
  }
  const addQuantityToCart = (product) => {
    dispatch(addCartItem(product))
  }
  return cart.length > 0 ? (
    <div className="bg-base-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
                <div className="bg-gray-700 rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map((p)=>(
                      <tr key={p.id}>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 mr-4 rounded-lg"
                          src={p.images[0]}
                          alt="Product image"
                        />
                        <span className="font-semibold">{p.title}</span>
                      </div>
                    </td>
                    <td className="py-4">{p.price}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button onClick={()=>removeQuantityFromCart(p)} className="border rounded-md py-2 px-4 mr-2">
                          -
                        </button>
                        <span className="text-center w-8">{p.quantity}</span>
                        <button onClick={()=>addQuantityToCart(p)} className="border rounded-md py-2 px-4 ml-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">{p.price*p.quantity}</td>
                  </tr>
                    ))
                  }
                  {/* <!-- More product rows --> */}
                </tbody>
              </table>
            </div>
            
          </div>
          
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>{totalCartValue(cart)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>{totalTaxes(cart)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>{totalShippingCharge(cart)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{AmountToPay(cart)}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="cont mx-auto text-xl font-semibold text-gray-500">
      Opps Your cart is Empty
    </div>
  );
}

export default Cart;
