import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetailItem({
  character: { name, status, species, location, image },
}) {
  return (
    <ul aria-label="character">
      <li>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{species}</p>
        <p>{location}</p>
        <img alt={name} src={image} />
      </li>
    </ul>
  );
}

CharacterDetailItem.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterDetailItem;
