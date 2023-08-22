import React, { useState } from "react";
import {
  deleteProduct,
  fetchProduct,
} from "../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProgressBar, Radio } from "react-loader-spinner";
import PaginationCuy from "../lib/Pagination";
import CreateProductModal from "./modals/CreateProductModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductList = () => {
  // get data from state redux
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  console.log("ini product", product.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(3);

  // get current images
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = product?.products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //modal createProduct
  const [showModalCreate, setShowModalCreate] = useState(false);

  return (
    <>
      <div className="w-full mt-5">
        <h1 className="text-center text-2xl font-bold">PRODUCT LIST</h1>

        <div className="mx-10 mt-5">
          <button
            className="ps-2 py-2 pe-3 bg-sky-700 text-white rounded-md font-bold"
            onClick={() => setShowModalCreate(true)}
          >
            + Add Product
          </button>
        </div>

        {/* when loadin */}
        {product.loading && (
          <div className="flex justify-center">
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#F4442E"
              barColor="#51E5FF"
            />
          </div>
        )}
        {/* when error */}
        {!product.loading && product.error ? (
          <div className="flex flex-col items-center">
            <Radio
              visible={true}
              height="80"
              width="80"
              ariaLabel="radio-loading"
              wrapperStyle={{}}
              wrapperClass="radio-wrapper"
            />
            <p>{product.error}</p>
          </div>
        ) : null}

        {!product?.loading && product?.products?.length ? (
          <div className="mx-10">
            {currentProducts?.map((item, index) => (
              <div key={index} className="w-full border-2 rounded-md mt-5">
                <div className="flex justify-between mx-5 my-5">
                  <div>
                    <p>{item.productName}</p>
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
                      <button
                        onClick={() => dispatch(deleteProduct(item.id))}
                        className="py-1 px-2 bg-amber-400 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="border border-2 rounded-md">
                    <LazyLoadImage
                      className="w-[200px] h-[200px] object-scale-down"
                      placeholderSrc={item.image}
                      src={item.image}
                      alt="images"
                      effect="blur"
                    />
                    {/* <img
                      src={item.image}
                      alt="images"
                      className="w-[200px] h-[200px] object-scale-down"
                    /> */}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center mb-5">
              <PaginationCuy
                totalProducts={product?.products?.length}
                productPerPage={productPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        ) : (
          <div className="text-center">There is no such a data</div>
        )}
      </div>

      <CreateProductModal
        show={showModalCreate}
        showProductModal={setShowModalCreate}
      />
    </>
  );
};

export default ProductList;
