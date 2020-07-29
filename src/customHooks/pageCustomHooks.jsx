import { useState } from 'react';
import PropTypes from 'prop-types';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const handleClick = ({ target }) => {
    if(target.name === 'next') setPage(page => page + 1);
    if(target.name === 'previous') setPage(page => page - 1);
  };

  return {
    page,
    handleClick
  };
};

usePagination.propTypes = {
  page: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired
};
