import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchRegistration = () => {
  const [res, setRes] = useState([]);
  const [formData, setFormData] = useState({ id: '', name: '', role: '', email: '', password: '' });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/retrieve');
      setRes(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateData = async (id) => {
    try {
      await axios.put(`http://localhost:8080/users/${id}`, formData);
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const changeHandler = (e, index) => {
    const updatedFormData = [...res];
    updatedFormData[index][e.target.name] = e.target.value;
    setRes(updatedFormData);
  };

  return (
    <div>
      <center>
        <h1>Registration</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roles</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {res.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => changeHandler(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="role"
                    value={item.role}
                    onChange={(e) => changeHandler(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={item.email}
                    onChange={(e) => changeHandler(e, index)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="password"
                    value={item.password}
                    onChange={(e) => changeHandler(e, index)}
                  />
                </td>
                <td>
                  <button onClick={() => updateData(item._id)}>Update</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default FetchRegistration;
