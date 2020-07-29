import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, species, status, image }) => {
  return (
    <section>
      <br></br>
      <div>Name: {name}</div>
      <div>Species: {species}</div>
      <img src={image}></img>
      <div>Status: {status}</div>
      <br></br>
    </section>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterItem;
