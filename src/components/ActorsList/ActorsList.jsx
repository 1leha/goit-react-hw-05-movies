import React from 'react';
import PropTypes from 'prop-types';

const ActorsList = ({ actors }) => {
  return (
    <ul>
      {actors.map(({ id, name, character, actorPhotoPath }) => {
        return (
          <li key={id}>
            <article>
              <img src={actorPhotoPath} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
      actorPhotoPath: PropTypes.string,
    })
  ).isRequired,
};

export default ActorsList;
