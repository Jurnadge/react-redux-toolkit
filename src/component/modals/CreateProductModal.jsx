import React from "react";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/features/product/productSlice";

export default function CreateProductModal({ show, showProductModal }) {
  const handleClose = () => showProductModal(false);
  const product = useSelector((state) => state.products);

  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("product", form);
    dispatch(createProduct(form));

    setForm({
      productName: "",
      price: "",
      stock: "",
      image: null,
    });

    showProductModal(false);
  };

  return (
    <>
      <Modal show={show} size="md" onClose={handleClose}>
        <Modal.Header>
          <p className="text-xl font-medium text-gray-900 dark:text-white">
            Create Product
          </p>
        </Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="productName"
                name="productName"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="productName"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Product Name
              </label>
            </div>

            <div className="relative">
              <input
                type="number"
                id="price"
                name="price"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="price"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Price
              </label>
            </div>

            <div className="relative">
              <input
                type="number"
                id="stock"
                name="stock"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="stock"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Stock
              </label>
            </div>

            <input
              className="block w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="small_size"
              type="file"
              name="image"
              onChange={handleChange}
            />

            {product.loading && !product.loading ? (
              <>
                <button
                  type="submit"
                  className="w-full bg-sky-700 text-white py-2 rounded-md"
                  disabled
                >
                  ...Loading
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="w-full bg-sky-700 text-white py-2 rounded-md"
                >
                  Create
                </button>
              </>
            )}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
