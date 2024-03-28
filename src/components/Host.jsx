import React from 'react';

function Host(props) {
    return (
      <>
        <span className="nom_proprio">{props.name}</span>
        <img
          className="photo_proprio"
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;