import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, species, status }) => {
  return (
    <div>{name},{species},{status}</div>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default CharacterItem;
