import React, { useState, useEffect, useContext } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { UserContext} from './UserContext'
import { UserInfoContext } from './UserInfoContext';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginStatus, setLoginStatus] = useState("")

  const { userInfo, setUserInfo } = useContext(UserInfoContext)
  const { user, setUser } = useContext(UserContext)
  
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    const userLog = { username: username, password: password };

    // send the username and password to the server
    const response = await Axios.post(
      "http://localhost:3000/login",
      userLog
    );

    setUserInfo(response.data[0])
    setUser(response.data[0].user_name)

    localStorage.setItem('user', JSON.stringify(response.data))
    navigate("/")
  }

  
  return (
    <>
      {
      
      <div className='login-container'>
      <div className='login-form-container'>

      
          <form className='login-form' onSubmit={handleSubmit}>
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
          name='password' />
            <button className='login-btn' onClick={handleSubmit}>Log-In</button>
        </form>

        <button className='link-btn' onClick={() => navigate("/signup")}> Don't Have an Account? Register Here.</button>
        
      </div>
     
      
        
      </div> }
    </>
  )
}

export default Login