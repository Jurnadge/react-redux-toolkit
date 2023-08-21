import React from "react";

export default function PaginationCuy({
  totalProducts,
  productPerPage,
  setCurrentPage,
  currentPage,
}) {
  const totalPages = Math.ceil(totalProducts / productPerPage);
  const pagesToShow = 5;
  let startPage, endPage;

  if (totalPages <= pagesToShow) {
    // Jika jumlah halaman kurang dari atau sama dengan 5, tampilkan semua halaman.
    startPage = 1;
    endPage = totalPages;
  } else {
    // Jika jumlah halaman lebih dari 5, sesuaikan awal dan akhir halaman yang ditampilkan.
    if (currentPage <= Math.ceil(pagesToShow / 2)) {
      startPage = 1;
      endPage = pagesToShow;
    } else if (currentPage + Math.floor(pagesToShow / 2) >= totalPages) {
      startPage = totalPages - pagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(pagesToShow / 2);
      endPage = currentPage + Math.floor(pagesToShow / 2);
    }
  }

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pageButtons = [];

  for (let page = startPage; page <= endPage; page++) {
    pageButtons.push(
      <button
        className={
          page === currentPage
            ? "bg-amber-500 px-2 bg-sky-500 border border-slate-800 mx-[1px] mt-5"
            : "bg-sky-500 px-2 bg-sky-500 border border-slate-800 mx-[1px] mt-5"
        }
        key={page}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
        className={
          currentPage === 1
            ? "cursor-not-allowed disabled:opacity-75 bg-sky-500 px-2 bg-sky-500 border border-slate-800 mx-[1px] mt-5"
            : "bg-sky-500 px-2 bg-sky-500 border border-slate-800 mx-[1px] mt-5"
        }
      >
        Previous
      </button>
      {pageButtons}
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={
          currentPage === totalPages
            ? "cursor-not-allowed disabled:opacity-75 bg-sky-500 px-2 bg-sky-500 border border-slate-800 mx-[1px] mt-5"
            : "bg-sky-500 px-2 bg-sky-500 border border-slate-800 mx-[1px] mt-5"
        }
      >
        Next
      </button>
    </div>
  );
}
