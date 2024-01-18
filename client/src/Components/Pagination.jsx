import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "../redux/slices/productSlice";
import { setPage } from "../redux/slices/pageSlice";

function Pagination() {
  const [isNextPage,setIsNextPage] = useState(false)
  const [isPreviousPage,setIsPreviousPage] = useState(false)
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pageReducer);
  const product = useSelector((state) => state.productReducer);

  const handleNextPage = () => {
    dispatch(setPage({ start: page.start + 1, end: page.end + 1 }));
    dispatch(paginate({ start: page.start, end: page.end + 1 }));
  };
  const handlePreviousPage = () => {
    dispatch(setPage({ start: page.start - 1, end: page.end - 1 }));
    dispatch(paginate({ start: page.start - 1, end: page.end + 1 - 1 }));
  };
  useEffect(()=>{
    setIsNextPage(!(Math.ceil(product.totalProducts/12)>page.start))
    setIsPreviousPage(!(page.start>=1 && page.start-1>=1)) 
  },[product])
  return (
    <div className="flex items-center justify-between w-full mt-10">
      <div className="join grid grid-cols-2 max-w-96 mx-auto">
        <button
          onClick={() => handlePreviousPage()}
          className="join-item btn btn-outline"
          disabled={isPreviousPage}
        >
          Previous
        </button>
        <button
          onClick={() => handleNextPage()}
          className="join-item btn btn-outline" 
          disabled={isNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;


