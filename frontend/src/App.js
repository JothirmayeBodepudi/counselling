import React from "react";
import Header from "./components/Header"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Visitor from "./components/Visitor";
import Counsellor from "./components/Counsellor";
import Contactinfo from "./components/Contactinfo";
import About from "./components/About";
import FetchRegistrations from "./components/FetchRegistrations";



 
function App() {
  return <React.Fragment>
  <header>
    <Header/>
  </header>
  <main>
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/signUp" element={<SignUp/>} exact />
      <Route path="/SignIn" element={<SignIn/>} exact />
      <Route path="/counsellor" element={<Counsellor/>} exact />
      <Route path="/visitor" element={<Visitor/>} exact />
      <Route path="/Appointment" element={<Appointment/>} exact />
      <Route path="/Contactinfo" element={<Contactinfo/>} exact />
      <Route path="/About" element={<About/>} exact />
      <Route path="/FetchRegistrations" element={<FetchRegistrations/>} exact />
 
    </Routes>
  </main>
</React.Fragment>   
}
export default App;

