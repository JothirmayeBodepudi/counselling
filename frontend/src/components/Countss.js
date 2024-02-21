import React, { useState } from 'react';

const Countss = () => {
  // Define state using the useState hook
  const [count, setCount] = useState(0);

  // Function to handle button click and update state
  const handleIncrement = () => {
    // Use the setCount function to update the state
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Countss</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Countss;
