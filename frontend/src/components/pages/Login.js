import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
  const [email,setEmail] = useState('email');
  const [pass,setPass] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

  }

  return (
    <div className='login-container'>
      <div className='login-form-container'>

        <form className='login-form' onSubmit={handleSubmit}>
          <label className='login-label' htmlFor='email'>Email:</label>
          <input className='login-input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' id='email' name='email'/>

          <label htmlFor='password'>Password:</label>
          <input className='login-input' type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='********' id='password' name='password'/>

          <button className='login-btn' type='Submit'>Log-In</button>
        </form>

        <button className='link-btn'>Don't Have an Account? Register Here.</button>
        
      </div>
    </div>
  )
}

export default Login