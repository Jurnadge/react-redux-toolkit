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
                ? "bg-amber-500 px-2 bg-sky-500 border border-slate-800 mx-[1px] mt-5"
                : "bg-sky-500 px-2 bg-sky-500 border border-slate-800 mx-[1px] mt-5"
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
