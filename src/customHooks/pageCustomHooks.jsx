import React, { useState } from 'react';

function usePagination = (data, characterAmount) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / characterAmount);

  function currentData() {
    const begin = (currentPage - 1) * characterAmount;
    const end = begin + characterAmount;
    return data.slice(begin, end);
  }

  function previous() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function next() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  return { next, previous, currentData, currentPage, maxPage };
};

export default usePagination;
