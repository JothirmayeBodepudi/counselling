import React from 'react';

const UsList = ({ use }) => {
  return (
    <div>
      <h2>Us List</h2>
      <ul>
        {use.map((use, index) => (
          <li key={index}>
            <strong>Name:</strong> {use.name}, <strong>Email:</strong> {use.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Set default prop values
UsList.defaultProps = {
  use: [],
};

export default UsList;
