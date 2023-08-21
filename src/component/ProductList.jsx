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
      {!product?.loading && product?.products?.products?.length ? (
        <>
          {product.products.products.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default ProductList;
