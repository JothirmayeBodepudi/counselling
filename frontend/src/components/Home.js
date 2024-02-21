import React from 'react'
// import Hello from './Hello'
//  import Greet from './Greet'
//  import Message from './Message'
// import  Counter  from './Counter'
// import ProductList from './ProductList'
//  import DataFetch from './DataFetch';
// import UserList from './UserList';
// import ToggleButton from './ToggleButton'
import FetchRegistrations from './FetchRegistrations'
const Home = (props) => {
  //  const products = [
  //    { name: 'apple', price: 10 },
  //    { name: 'mango', price: 15 },
  //    { name: 'orange', price: 20 },
  //  ];
  // UserCard.defaultProps = {
  //   name: "Ravi",
  //   totalnoofitems:"3",
   
  // }
  // const users = [
  //   { name: 'John Doe', email: 'john.doe@example.com' },
  //   { name: 'Jane Smith', email: 'jane.smith@example.com' },
  //   // Add more users as needed
  // ];

  return (
    <div>
        {/* <ToggleButton/> */}
        <FetchRegistrations/>
       {/* <DataFetch/> 
        <ProductList products={products} />   
        <UserList users={users} /> 
       <Counter/>
      <Message/>
      <ProductList/>
      <Hello name="ravi" id='1' address="Vijayawada"/>
      <Greet name="ravi" id='2'/>  */}
    </div>
  )
}

export default Home
