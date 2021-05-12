//Function to fetch characters
export const getCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');

  const { results } = await res.json();

  //Map through the results array
  return results.map((character) => ({
    id: character.id,
    name: character.name,
    species: character.species,
    image: character.image,
  }));
};

export const getCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();

  return {
    name: character.name,
    status: character.status,
    species: character.species,
    location: character.location.name,
    image: character.image,
  };
};
