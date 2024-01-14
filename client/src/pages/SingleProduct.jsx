import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProductById } from "../lib/fetProductById";
import {LiaRupeeSignSolid} from 'react-icons/lia'
import AddToCartButton from "../Components/AddToCartButton";

function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const p = fetchProductById(params.id);
    setProduct((prev) => (prev = p));
  }, []);
  return (
    <>
      {product && (
        <div className="card lg:card-side bg-base-100 shadow-xl cont mx-auto flex">
          <figure className="w-[450px]">
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
              {
                product?.images?.map((src,i)=><div key={i} className="carousel-item">
                <img
                  src={src}
                  alt="product"
                  className="object-contain max-w-[450px] max-h-[450px]"
                />
              </div>)
              }
            </div>
          </figure>
          <div className="card-body flex-1">
            <h1>Product Name : </h1>
            <h2 className="card-title">{product?.title}</h2>
            <h3>Product Description : </h3>
            <h4>{product.description}</h4>
            <h4>{product.color}</h4>
            <h3 className="text-4xl flex gap-3 items-end"><LiaRupeeSignSolid/>{<span className="flex items-center gap-2 font-semibold">{product.price}{<del className="text-xl mt-auto">{product.price+(product.price*product.discountPercentage/100)}</del>}</span>}<span className="text-sm">{product.discountPercentage}% off</span></h3>
            <h4 className="text-xl">Brand name : <span className="text-base-900">{product.brand}</span></h4>
            <h4>only {product.stock} items left <span className="text-rose-500 font-thin ml-3">hurry up</span></h4>
            <div className="card-actions justify-end">
              <AddToCartButton cartItem={product} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
