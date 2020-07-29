import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ handleClick }) => {

  return (
    <section>
      <button name='previous' onClick={handleClick}>Previous</button>
      <button name='next' onClick={handleClick}>Next</button>   
    </section>
  );
};

Pagination.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Pagination;
