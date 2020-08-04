import { useEffect, useState } from 'react';
import { getCharacter } from '../services/getCharacter';

export const useListContainer = (page) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter(page)
      .then(characters => setCharacters(characters));
  }, [page]);

  return {
    characters
  };
};

