import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/productSlice";
import { useEffect } from "react";
import { Pagination } from "flowbite-react";
import PaginationCuy from "../lib/Pagination";

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  console.log("ini product", product?.products.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(4);

  // get current images
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = product?.products?.products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //get page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="w-full mt-10 mb-10">
        {!product?.loading && product?.products?.products?.length ? (
          <div className="mx-10">
            {currentProducts?.map((item, index) => (
              <div key={index} className="w-full border-2 rounded-md mt-5">
                <div className="flex justify-between mx-5 my-5">
                  <div>
                    <p>{item.title}</p>
                    <p>price: ${item.price}</p>
                    <p>stock: {item.stock}</p>

                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="">
                      <button className="me-5 py-1 px-2 bg-sky-700 rounded-md">
                        Edit
                      </button>
                      <button className="py-1 px-2 bg-amber-400 rounded-md">
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="border border-2 rounded-md">
                    <img
                      src={item.thumbnail}
                      alt="images"
                      className="w-[200px] h-[200px] object-scale-down"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        <div className="flex justify-center">
          <PaginationCuy
            totalProducts={product?.products?.products?.length}
            productPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default ProductList;
