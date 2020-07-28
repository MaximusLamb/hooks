export const getCharacter = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(res => res.results);
};
