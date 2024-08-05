import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import '../../styles/components/pagination.css'; // Import the custom CSS
import { setPage } from '../../redux/classSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function PaginationComponent() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.classes.currentPage);
  const classes = useSelector((state) => state.classes.classes);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(classes.length / itemsPerPage);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className='hidden sm:block'>
    <div className='w-full h-20 flex items-center p-5'>
      <Pagination className="custom-pagination">
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Back</span>
        </Pagination.Prev>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            className="custom-item"
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)}>
          <span>Next</span>
          <FontAwesomeIcon className='pl-1' icon={faAngleRight} />
        </Pagination.Next>
      </Pagination>
      
    </div>
    </div>
  );
}
