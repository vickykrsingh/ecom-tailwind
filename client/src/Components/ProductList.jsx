import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./ratings";
import { MdCurrencyRupee } from "react-icons/md";
import AddToCartButton from "./AddToCartButton";
import Pagination from "./Pagination";

function ProductList({ product, heading }) {
  return (
    <div className="bg-transparent text-gray-200">
      <div className="mx-auto max-w-2xl px-4 py-16 cont">
        <h2 className="text-2xl font-bold tracking-tight">{heading}</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product &&
            product.map((p) => (
              <div key={p.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={p.images[0]}
                    alt="p"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-300">
                      <Link to={`/products/${p.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {p.title.substr(0, 25) + "..."}
                        <p className="text-sm font-medium text-gray-400 flex gap-1 items-center">
                          {p.price}
                          {<MdCurrencyRupee />}
                        </p>
                      </Link>
                    </h3>
                    <div className="mt-1 text-sm text-gray-300">
                      <Ratings star={p.rating} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <AddToCartButton cartItem={p} />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default ProductList;
