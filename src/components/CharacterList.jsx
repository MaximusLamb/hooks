import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const listOfCharacters = characters.map(character => {
    return (
      <>
        <Link to={`/${character.id}`}>
          <li key={character.name}>
            <CharacterItem {...character} />
          </li>
        </Link>
      </>
    );
  });

  return (
    <div>
      <ul>
        {listOfCharacters}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
