import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from './UserContext'

//{ setUsername, setPassword, setUser }
const Logout = () => {
    
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const handleLogout = () => {
        setUser("")
        localStorage.clear();
        navigate("/")
    };

  return (
      <>
          <button onClick={handleLogout}>logout</button>
      </>
  )
}

export default Logout