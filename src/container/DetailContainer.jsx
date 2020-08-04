import React from 'react';
import CharacterDetail from '../components/App/CharacterDetail';
import { useDetailConainer } from '../customHooks/useDetailContainer';


const DetailContainer = () => {
  
  const {
    name,
    species,
    status,
    image,
    gender
  } = useDetailConainer();

  return (
    <CharacterDetail
      name={name}
      species={species}
      status={status}
      image={image}
      gender={gender}
    />
  ); 
};

export default DetailContainer;
