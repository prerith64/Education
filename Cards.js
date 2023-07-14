import React from 'react';

function Cards(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.imageUrl} className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Cards;
