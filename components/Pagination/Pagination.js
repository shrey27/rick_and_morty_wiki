import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ updatePageNumber }) => {
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
