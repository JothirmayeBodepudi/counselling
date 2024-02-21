import React from 'react';

const SimpleComponent = (props) => {
  return (
    <div>
      <h2>{props.Name}</h2>
      <p>Price: ${props.price}</p>
      {props.isOnSale && <p>On Sale!</p>}
    </div>
  );
};

export default SimpleComponent;

