import { useEffect, useState } from 'react';
import { getCharacter } from '../services/getCharacter';

export const useListContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter()
      .then(characters => setCharacters(characters));
  }, []);

  return {
    characters
  };
};

