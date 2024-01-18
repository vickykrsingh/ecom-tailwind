import React, { useEffect } from "react";
import { useState } from "react";
import { products } from "../../public/data";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/slices/productSlice";


const price = [
  {
    label: "0-99",
    value: 99,
  },
  {
    label: "under 2000",
    value: 1999,
  },
  {
    label: "under 3000",
    value: 2999,
  },
  {
    label: "under 5000",
    value: 4999,
  },
  {
    label: "under 10000",
    value: 9999,
  },
  {
    label: "under 50000",
    value: 49999,
  },
  {
    label: "100000 or more",
    value: 99999,
  },
];

function FilterProduct() {
  const [accordian, setAccordian] = useState(false);
  const [category, setCategory] = useState([]);
  const [filtered, setFiltered] = useState({
    category: [],
    range: 0,
  });
  const dispatch = useDispatch()
  const pageDetail = useSelector((state)=>state.pageReducer)

  const getFilteredProducts = () => {
    if(filtered.category.length>0 || filtered.range>0){
      if(filtered.category.length>0&&filtered.range>0){
        dispatch(setProduct({category:filtered.category,price:filtered.range,start:pageDetail.start,end:pageDetail.end}))
      }else if(filtered.category.length>0){
        dispatch(setProduct({category:filtered.category,start:pageDetail.start,end:pageDetail.end}))
      }else if(filtered.range>0){
        dispatch(setProduct({price:Number(filtered.range),start:pageDetail.start,end:pageDetail.end}))
      }
      else{
        throw new Error("Something went wrong on client side")
      }
    }else{
      dispatch(setProduct())
    }
  }

  const getCategory = () => {
    const distinctCategoriesSet = new Set();

    // Iterate through each product and add its categories to the Set
    products.forEach((product) => {
      product.category.forEach((category) => {
        distinctCategoriesSet.add(category);
      });
    });

    // Convert Set back to an array to get distinct category names
    const distinctCategoriesArray = [...distinctCategoriesSet];
    setCategory((prev) => (prev = distinctCategoriesArray));
  };
  useEffect(() => {
    getCategory()
    getFilteredProducts()
  }, [filtered]);
  return (
    <div
      className="collapse bg-base-200 cont mx-auto !py-0"
      onClick={(e) => {
        setAccordian(!accordian);
        e.stopPropagation();
      }}
    >
      <input
        type="radio"
        name="my-accordion-1"
        checked={accordian}
        onChange={(e) => setAccordian(e.target.checked)}
      />
      <div className="collapse-title text-xl font-medium">Filter By :</div>
      <div className="collapse-content flex flex-col gap-2">
        <div className="flex flex-wrap gap-4 items-center">
          {category?.map((c) => (
            <div
              key={c}
              className="flex gap-2 items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                name={c}
                className="checkbox"
                defaultValue={c}
                onChange={(e) => {
                  if(filtered.category.includes(e.target.value)){
                    setFiltered({
                      ...filtered,
                      category:filtered.category.filter((c)=>c!=e.target.value)
                    })
                  }else{
                    setFiltered({
                      ...filtered,
                      category: [...filtered.category, e.target.value],
                    })
                  }
                }
                  
                }
              />
              <label htmlFor={c}>{c}</label>
            </div>
          ))}
        </div>
        <div
          className="flex flex-wrap gap-4 items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {price.map((p) => (
            <div
              key={p.label}
              className="flex gap-2 items-center justify-center"
            >
              <input
                type="radio"
                name="price"
                className="radio"
                defaultValue={p.value}
                onChange={(e) =>
                  setFiltered({
                    ...filtered,
                    range: e.target.value,
                  })
                }
              />
              <label htmlFor={p.label}>{p.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
