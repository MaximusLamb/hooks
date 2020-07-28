import React from 'react';
import CharacterList from '../components/CharacterList';
import { useListContainer } from '../customHooks/useListContainer';


const ListContainer = () => {
  
  const {
    characters
  } = useListContainer();

  return (
    <CharacterList
      characters={characters}
    />
  ); 
};

export default ListContainer;
