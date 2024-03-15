import React from 'react';


function Cards({image, title}) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card_img" />
        <div className="card_overlay"></div>

        <h2 className="card_title">{title}</h2>
      </div>
    );
}

export default Cards;