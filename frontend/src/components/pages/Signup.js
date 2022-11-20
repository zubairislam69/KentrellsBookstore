import React, { useState }  from 'react'
import "./Signup.css"

const Signup = () => {
  const [email,setEmail] = useState('email');
  const [pass,setPass] = useState('password');
  const [name,setName] = useState('username');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className='signup-container'>
      <div className='signup-form-container'>

        <form className='signup-form' onSubmit={handleSubmit}>
          <label className='signup-label' htmlFor='name'>Name:</label>
          <input className='signup-input' value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='Username' />

          <label htmlFor='email'>Email:</label>
          <input className='signup-input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' id='email' name='email'/>

          <label htmlFor='password'>Password:</label>
          <input className='signup-input' type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='********' id='password' name='password'/>

          <button className='signup-btn' type='Submit'>Log-In</button>
        </form>

        <button className='link-btn'>Already Have an Account? Login Here.</button>

      </div>
    </div>
  )
}

export default Signup