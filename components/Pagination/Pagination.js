import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { isMobile } from 'react-device-detect';

export default function PaginationBar(){
  let handlePageChange = (data) => {
    //updatePageNumber(data.selected + 1);
  };

  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   window.addEventListener('resize', updateDimensions);
  //   const updateDimensions = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   return () => window.removeEventListener('resize', updateDimensions);
  // }, []);


  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 2px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className='pagination justify-content-center my-4 gap-4'
        nextLabel='Next'
        //forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel='Previous'
        previousClassName={isMobile ? 'btn btn-outline-primary fs-5 prev' : null}
        nextClassName={isMobile ? 'btn btn-outline-primary fs-5 next' : null}
        activeClassName='active'
        marginPagesDisplayed={isMobile ? 1 : 2}
        pageRangeDisplayed={isMobile ? 1 : 2}
        pageCount={42}
        onPageChange={handlePageChange}
        pageClassName='page-item'
        pageLinkClassName='page-link'
      />
    </>
  );
};

