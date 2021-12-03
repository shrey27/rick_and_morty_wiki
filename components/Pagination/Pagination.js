import ReactPaginate from 'react-paginate';
import { isMobile } from 'react-device-detect';
import styles from '../../styles/common.module.css';

export default function PaginationBar({info, pageNumber, updatePageNumber}){
  let handlePageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        className={styles.pagination}
        nextLabel='Next'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel='Prev'
        previousClassName={info?.pages ? styles.prev : styles.dispNone}
        nextClassName={info?.pages ? styles.next : styles.dispNone}
        activeClassName={styles.active}
        activeLinkClassName={styles.activeLink}
        marginPagesDisplayed={isMobile ? 1 : 2}
        pageRangeDisplayed={isMobile ? 2 : 3}
        pageCount={info ? info?.pages : 0}
        onPageChange={handlePageChange}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
      />
    </>
  );
};

