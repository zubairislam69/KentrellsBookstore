import React, { useState }  from 'react'
import "./Signup.css"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [birthPlace, setBirthPlace] = useState("")
  const [shippingAddress, setShippingAddress] = useState("")

  const [profile, setProfile] = useState({ username: '', email: '', password: '', age: 0, birthPlace: '', shippingAddress: '' })
  const [returnedData, setReturnedData] = useState([{}])


  const register = () => {
    Axios.post('http://localhost:3000/signup', {
      username: username,
      email: email,
      password: password,
      age: age,
      birthPlace: birthPlace,
      shippingAddress: shippingAddress,

    }).then((response) => {
    console.log(response)
    })
    
    navigate("/login")
  }

  // const getAllProfile = async () => {
  //   const newData = await fetch('/signup', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       ...profile
  //     })
  //   })
  //     .then(res => res.json())
  //   console.log(newData)
  //   setReturnedData(newData)
  // }
  // console.log("returnedData")

  // console.log(returnedData)

  const createProfile = async () => {
    const newData = await fetch('/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...profile
      })
    })
      .then(res => res.json())
    console.log(newData)
    setReturnedData(newData[0])
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
        <button className='signup-btn' onClick={register}> Register </button>
        </form>
        <button className='link-btn' onClick={() => navigate("/login")}> Already Have an Account? Login Here.</button>
        {/* {listItems} */}
      </div>
    </div>
  )
}

export default Signup