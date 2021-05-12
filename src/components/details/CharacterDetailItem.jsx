import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetailItem({
  character: { name, status, species, location, image },
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{species}</p>
      <p>{location}</p>
      <img alt={name} src={image} />
    </div>
  );
}

CharacterDetailItem.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterDetailItem;
