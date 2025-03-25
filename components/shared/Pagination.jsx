'use client';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = ({ paginateFunction }) => {
  const { totalPage, currentPage, setCurrentPage, goToNextPage, goToPreviousPage } = paginateFunction;

  return (
    <div className="container">
      <ul className="flex items-center justify-center gap-2">
        {/* Previous Page Button */}
        <li>
          <button
            onClick={goToPreviousPage}
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 text-black text-sm font-medium duration-300 
              ${currentPage === 1 ? 'opacity-50 cursor-not-allowed text-gray-400' : 'hover:bg-gray-200'}`}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: totalPage }, (_, index) => (
          <li key={index}>
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium duration-300
                ${index + 1 === currentPage ? 'bg-black text-white' : 'hover:bg-gray-200 hover:text-black'}`}
              onClick={() => setCurrentPage(index +  1)}
            >
              {index + 1}
            </button>
          </li>
        ))}

        {/* Next Page Button */}
        <li>
          <button
            onClick={goToNextPage}
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 text-black text-sm font-medium duration-300 
              ${currentPage === totalPage ? 'opacity-50 cursor-not-allowed text-gray-400' : 'hover:bg-gray-200 '}`}
            disabled={currentPage === totalPage}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
