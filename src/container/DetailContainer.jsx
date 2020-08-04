import React, { useEffect } from 'react';
import { useState } from 'react';
import { getOneCharacter } from '../services/getOneCharacter';
import CharacterDetail from '../components/App/CharacterDetail';
import { useParams } from 'react-router-dom';


const DetailContainer = () => {
  const { id } = useParams();
  const [name, setName] = useState([]);
  const [species, setSpecies] = useState([]);
  const [status, setStatus] = useState([]);
  const [image, setImage] = useState([]);
  const [gender, setGender] = useState([]);

  useEffect(() => {
    getOneCharacter(id)
      .then(({ name, species, status, image, gender }) => {
        setName(name);
        setSpecies(species);
        setStatus(status);
        setImage(image);
        setGender(gender);
      });
  }, []);
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
