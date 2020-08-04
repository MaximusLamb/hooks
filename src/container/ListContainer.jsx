import React, { useEffect } from 'react';
import { useState } from 'react';
import { getCharacter } from '../services/getCharacter';
import CharacterList from '../components/CharacterList';


const ListContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter()
      .then(characters => setCharacters(characters));
  }, []);
  return (
    <CharacterList
      characters={characters}
    />
  ); 
};

export default ListContainer;
