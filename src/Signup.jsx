import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import './Signup.css';

const Signup = () => {
  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
     
    <nav className='navbar'>
      <div className='logo'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
      </div>
      <div className='list'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="social-media">
                    <ul>
                        <li><a href="#"><FaFacebookSquare className="facebook"/></a></li>
                        <li><a href="#"><FaInstagramSquare className="instagram"/></a></li>
                        <li><a href="#"><FaYoutubeSquare className="youtube"/></a></li>
                    </ul>
                </div> 
    </nav>
    <div className='main'>
      <form className='form'>
        <h1>Name: </h1><input type="text" onChange={(e) => setName(e.target.value)} /><br />
        <h1>Number: </h1><input type="number" onChange={(e) => setNumber(e.target.value)} /><br />
        <h1>Email: </h1><input type="email" onChange={(e) => setEmail(e.target.value)} /><br />
        <h1>Password: </h1><input type="password" onChange={(e) => setPassword(e.target.value)} /></form>
      
      <h2>Name: {name}</h2>
      <h2>Number: {number}</h2>
      <h2>Email: {email}</h2>
      <h2>Password: {password}</h2>
    </div>
    </>
  )
}

export default Signup