import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterItem({ id, name, species, image }) {
  return (
    <Link className="links" to={`/${id}`}>
      <div>
        <h2>{name}</h2>
        <p>{species}</p>
        <img alt={name} src={image} />
      </div>
    </Link>
  );
}

CharacterItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterItem;
