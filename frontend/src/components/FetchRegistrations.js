import React, { useEffect, useState, ListItem } from 'react' 
import axios from 'axios' 
 
const FetchRegistration = () => { 
const [res,setRes]=useState([]) 
const [formData, setFormData]=useState({name:'',role:'',email:'',password:'',id:''}) 
const fetchData=async()=>{ 
await axios.get('http://localhost:8080/retrieve') 
.then(response=>{ 
    setRes(response.data) 
    console.log(response.data) 
})} 
useEffect(()=>{ 
  fetchData()  
}, 
[]) 
const updateData=async(id)=>{ 
  console.log(id) 
const res = await axios.put(`http://localhost:8080/users/:${id}`,formData) 
fetchData() 
  console.log(res.data) 
} 
const handleDelete=async (id)=>{ 
  await axios.delete(`http://localhost:8080/users/${id}`) 
  .then((response)=>{ 
    console.log(response.data) 
  }) 
  fetchData() 
} 
const changeHandler=(e)=>{ 
  setFormData({ ...formData, [e.target.name]: e.target.value}); 
}; 
 
  return ( 
 
    <div><center><h1>Registration</h1> 
    <table border ={1}> 
      <tr> 
        <th>ID</th> 
        <th>Name</th> 
        <th>Roles</th> 
        <th>Email</th> 
        <th>Password</th> 
      </tr> 
      { 
        res.map((item, index) => ( 
         <tr key={index}> 
          '<td>{item._id}</td> 
          <td>{item.name}</td> 
          <td>{item.role}</td> 
          <td>{item.email}</td> 
          <td>{item.password}</td> 
          <td> 
            <input type='text' name='name' 
            placeholder='New Name'  
            onChange={changeHandler}/> 
             <input type='text' name='role' 
            placeholder='New Role'  
            onChange={changeHandler}/> 
             <input type='text' name='email' 
            placeholder='New email'  
            onChange={changeHandler}/> 
             <input type='text' name='password' 
            placeholder='New password'  
            onChange={changeHandler}/> 
            <button onClick={()=>updateData(item._id)}>update</button> 
            <button onClick={()=>handleDelete(item._id)}>Delete</button> 
          </td> 
         </tr>  
        ))} 
    </table> 
    </center> 
   
    </div> 
 
  ) 
} 
export default FetchRegistration