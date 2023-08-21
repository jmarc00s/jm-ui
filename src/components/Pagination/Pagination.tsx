import classNames from 'classnames';
import React, { useState } from 'react';

export type PaginationProps = {
  pages: number;
  onPageClick: (page: number) => void;
};

export const Pagination = ({ pages = 1, onPageClick }: PaginationProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const handlePageClick = (pageNumber: number): void => {
    setActiveItem(pageNumber);
    onPageClick(pageNumber);
  };

  return (
    <div className="join">
      {[
        Array.from(Array(pages).keys()).map((pageNumber) => (
          <button
            onClick={() => handlePageClick(pageNumber)}
            key={pageNumber}
            className={classNames(
              'join-item btn',
              pageNumber === activeItem && 'btn-active btn-primary',
            )}
          >
            {pageNumber + 1}
          </button>
        )),
      ]}
    </div>
  );
};
