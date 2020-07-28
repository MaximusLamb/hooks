import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, species, status, image, gender }) => {
  return (
    <section>
      <h1>{name}</h1>
      <h2>Species: {species}</h2>
      <h2>Status: {status}</h2>
      <img src={image}></img>
      <h2>Gender: {gender}</h2>
    </section>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
};

export default CharacterDetail;
