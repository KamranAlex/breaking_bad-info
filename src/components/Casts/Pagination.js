import React from 'react';
import './Casts.css';

const Pagination = ({ castsPerPage, totalCasts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCasts / castsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='container'>
      <ul className='pagination d-flex justify-content-center'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#!' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
