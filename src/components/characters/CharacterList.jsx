import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

function CharacterList({ characters }) {
  return (
    <ul aria-label="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterItem
            id={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
          />
        </li>
      ))}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
