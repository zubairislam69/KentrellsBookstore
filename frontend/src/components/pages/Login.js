import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("")

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);

  // }

  const navigate = useNavigate()
  const navigateToSignUp = () => {
    navigate("/signup")
  }
  const login = () => {
    Axios.post('http://localhost:3000/login', {
      username: username,
      password: password,
    }).then((response) => {

      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus("Logged in as " + response.data[0].user_name)
        setTimeout(function () {
          navigate("/")
        }, 1000);
      }
    })
    
    
  }


  return (
    <div className='login-container'>
      <div className='login-form-container'>

        {/* onSubmit={handleSubmit} */}
        {/* <form className='login-form' > */}
          <label className='login-label' htmlFor='username'>Username:</label>
          <input
            className='login-input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            id='username'
            name='username' />

          <label htmlFor='password'>Password:</label>

          <input 
            className='login-input' 
            type='password' 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            placeholder='********' 
            id='password'
            name='password'/>
          <button className='login-btn' onClick = {login}>Log-In</button>
        {/* </form> */}

        <button className='link-btn' onClick={navigateToSignUp}>Don't Have an Account? Register Here.</button>
        
      </div>
      <h1> { loginStatus } </h1>
    </div>
  )
}

export default Login