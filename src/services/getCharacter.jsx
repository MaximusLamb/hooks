export const getCharacter = (pageNumber) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => res.json())
    .then(res => res.results);
};
