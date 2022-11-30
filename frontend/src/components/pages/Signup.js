import React, { useState, useEffect }  from 'react'
import "./Signup.css"
import Axios from 'axios'
import { useNavigate, Navigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [registerStatus, setRegisterStatus] = useState("")

  const [birthPlace, setBirthPlace] = useState("")
  const [shippingAddress, setShippingAddress] = useState("")
  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {

    if(username.length>=6 && email.length>0 && password.length>=6, age.length>=1 && birthPlace.length>0 && shippingAddress.length>0){
      setButtonState(false);
    }


  }, [username, email, password, birthPlace, shippingAddress ]);

  // const register = () => {
  //   Axios.post('http://localhost:3000/signup', {
  //     username: username,
  //     email: email,
  //     password: password,
  //     age: age,
  //     birthPlace: birthPlace,
  //     shippingAddress: shippingAddress,
  //   }).then((response) => {
  //   console.log(response)
  //   })
    
  //   navigate("/login")
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userLog = { username: username, email: email, password: password, age: age, 
      birthPlace: birthPlace, shippingAddress: shippingAddress };
    
    // send the username and password to the server
    const response = await Axios.post(
      "http://localhost:3000/signup",
      userLog
    );

    if (response.data.message){
      setRegisterStatus(response.data.message)
      alert("Email Or Password Is Already Associated with an account")

    }

    
      else
      setRegisterStatus("")
      
    navigate("/login")
       
      
  }
  return (
    <div className='signup-container'>
      <div className='signup-form-container'>
        <form className='signup-form'>

          <label className='signup-label' htmlFor='name'>Username:</label>

          <input
            className='signup-input'
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            name='username' id='username'
            placeholder='Username'
          />

          <label htmlFor='email'>Email:</label>
          <input 
            className='signup-input' 
            type='email' 
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder='youremail@gmail.com'
            id='email'
            name='email'
          />

          <label htmlFor='password'>Password:</label>
          <input 
            className='signup-input'
            type='password' 
            placeholder='********'
          onChange={(e) => {
            setPassword(e.target.value)
          }} 
            id='password'
            name='password'
          />

          <label htmlFor='age'>age:</label>
          <input
            className='signup-input'
          onChange={(e) => {
            setAge(e.target.value)
          }}
            placeholder='19...'
            id='age'
            name='age'
          />

          <label htmlFor='birthPlace'>birthPlace:</label>
          <input
            className='signup-input'
          onChange={(e) => {
            setBirthPlace(e.target.value)
          }}
            placeholder=''
            id='birthPlace'
            name='birthPlace'
          />

          <label htmlFor='shippingAddress'>Shipping Address:</label>
          <input
            className='signup-input'
          onChange={(e) => {
            setShippingAddress(e.target.value)
          }}
            placeholder=''
            id='shippingAddress'
            name='shippingAddress'
          />
        <button className='signup-btn'  disabled={buttonState} onClick={handleSubmit}> Register </button>
        </form>
        <button className='link-btn' disabled={buttonState} onClick={() => navigate("/login")}> Already Have an Account? Login Here.</button>
      </div>
    </div>
  )
}

export default Signup