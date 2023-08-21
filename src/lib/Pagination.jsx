import { current } from "@reduxjs/toolkit";
import React from "react";

export default function PaginationCuy({
  totalProducts,
  productPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className={
              page == currentPage
                ? "bg-amber-500 px-2 rounded-md bg-sky-500 flex-cols gap-2 mt-5 mx-1"
                : "bg-sky-500 px-2 rounded-md bg-sky-500 flex-cols gap-2 mt-5 mx-1"
            }
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
