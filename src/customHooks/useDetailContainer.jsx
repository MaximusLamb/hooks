import { useEffect, useState } from 'react';
import { getOneCharacter } from '../services/getOneCharacter';
import { useParams } from 'react-router-dom';

export const useDetailConainer = () => {
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

  return {
    name,
    species,
    status,
    image,
    gender
  };
};

