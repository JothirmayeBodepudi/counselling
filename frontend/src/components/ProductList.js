import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3>Timer</h3>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [todoList, setTodoList] = useState([
    { title: 'Purchase the Stock', completed: false },
    { title: 'Arrange the Stock in Order', completed: true },
    { title: 'Collect Money from the Customer', completed: true },
    // Add more todos as needed
  ]);

  const handleAddToCart = (productName) => {
    setCart(prevCart => [...prevCart, productName]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodoList(updatedTodos);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
            </div>
            <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <Timer />

      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
