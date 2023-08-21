import classNames from 'classnames';
import React, { useState } from 'react';

export type PaginationProps = {
  pages: number;
  onPageClick: (page: number) => void;
};

export const Pagination = ({ pages = 1, onPageClick }: PaginationProps) => {
  const [activeItem, setActiveItem] = useState(1);

  const handlePageClick = (pageNumber: number): void => {
    setActiveItem(pageNumber);
    onPageClick(pageNumber);
  };

  return (
    <div className="join" data-testid="pagination">
      {[
        Array.from({ length: pages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            onClick={() => handlePageClick(pageNumber)}
            key={pageNumber}
            className={classNames(
              'join-item btn',
              pageNumber === activeItem && 'btn-active btn-primary',
            )}
          >
            {pageNumber}
          </button>
        )),
      ]}
    </div>
  );
};
