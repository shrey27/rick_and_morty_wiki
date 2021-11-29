// import { Heading } from 'rebass';
// import Pagination from 'react-bootstrap/Pagination';
// let i = 0;
// let pageNumber = 1;
// export default function PaginationBar() {
//   return (
//     <Pagination size='lg'>
//       <Pagination.First />
//       <Pagination.Prev onClick={() => console.log(--i)} />
//       <Pagination.Item active={i === pageNumber}>{1}</Pagination.Item>
//       <Pagination.Item active={i === pageNumber}>{2}</Pagination.Item>
//       <Pagination.Item active={i === pageNumber}>{3}</Pagination.Item>
//       <Pagination.Ellipsis onClick={() => console.log(++i)}/>
//       <Pagination.Item active={i === pageNumber}>{18}</Pagination.Item>
//       <Pagination.Item active={i === pageNumber}>{19}</Pagination.Item>
//       <Pagination.Item active={i === pageNumber}>{20}</Pagination.Item>
//       <Pagination.Next onClick={() => console.log(++i)} />
//       <Pagination.Last />
//     </Pagination>
//   );
// }

import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let handlePageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  // const [width, setWidth] = useState(global.innerWidth);
  // const updateDimensions = () => {
  //   setWidth(global.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener('resize', updateDimensions);
  //   return () => window.removeEventListener('resize', updateDimensions);
  // }, []);

  return (
    // <ReactPaginate
    //   previousLabel='Previous'
    //   nextLabel='Next'
    //   pageClassName='page-item'
    //   pageLinkClassName='page-link'
    //   previousClassName='page-item'
    //   previousLinkClassName='page-link'
    //   nextClassName='page-item'
    //   nextLinkClassName='page-link'
    //   breakLabel='...'
    //   breakClassName='page-item'
    //   breakLinkClassName='page-link'
    //   pageCount={20}
    //   marginPagesDisplayed={2}
    //   pageRangeDisplayed={3}
    //   onPageChange={handlePageChange}
    //   containerClassName='pagination'
    //   activeClassName='active'
    //   //forcePage={pageOffset}
    // />
    <>
      <ReactPaginate
        className='pagination justify-content-center my-4 gap-4'
        nextLabel='Next'
        //forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel='Previous'
        previousClassName='btn btn-outline-primary fs-5 prev'
        nextClassName='btn btn-outline-primary fs-5 next'
        activeClassName='active'
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={20}
        onPageChange={handlePageChange}
        pageClassName='page-item'
        pageLinkClassName='page-link'
      />
    </>
  );
};

export default Pagination;
