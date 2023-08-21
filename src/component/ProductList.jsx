import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/productSlice";
import { useEffect } from "react";

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  console.log("ini product", product?.products.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <div className="w-full mt-10 mb-10">
        {!product?.loading && product?.products?.products?.length ? (
          <div className="mx-10">
            {product?.products.products.map((item, index) => (
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
      </div>
    </>
  );
};

export default ProductList;
