import React from 'react';
import CharacterList from '../components/CharacterList';
import { useListContainer } from '../customHooks/useListContainer';
import { usePagination } from '../customHooks/pageCustomHooks';
import Pagination from '../components/Pagination';


const ListContainer = () => {
  const {
    page,
    handleClick
  } = usePagination();
  
  const {
    characters
  } = useListContainer(page);


  return (
    <>
      <Pagination handleClick={handleClick}/>
      <CharacterList
        characters={characters}
      />
      <Pagination handleClick={handleClick}/>
    </>
  ); 
};

export default ListContainer;
