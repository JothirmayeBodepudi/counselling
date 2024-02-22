import React from 'react';
import ProductList from './ProductList';
import UserList from './UserList';
//import FetchRegistrations from './FetchRegistrations';

const Home = (props) => {
  const products = [
    { name: 'mango', price: 30 },
    { name: 'apple', price: 25 },
    { name: 'orange', price: 20 },
    // Add more products as needed
  ];
  const users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];
  UserList.defaultProps = {
    name: "Ravi",
    totalnoofitems: "3",
  };

  return (
    <div>
      {/* <ToggleButton/> */}
       {/* <FetchRegistrations/>  */}
      <ProductList products={products} />
      <UserList users={users} />
      {/* 
      <DataFetch/> 
      <ProductList products={products} />   
      <UserList users={users} /> 
      <Counter/>
      <Message/>
      <Hello name="ravi" id='1' address="Vijayawada"/>
      <Greet name="ravi" id='2'/> 
      */}
    </div>
  );
};

export default Home;
