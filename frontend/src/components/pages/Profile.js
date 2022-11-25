import React, { useState, useEffect, useContext } from 'react'
import "./Profile.css"
import pfp from "../images/anonPFP.png"
import Main from "./profilePages/Main"
import Orders from "./profilePages/Orders"
import Account from "./profilePages/Account"

import { useNavigate } from "react-router-dom";

import { UserContext} from './UserContext'
import { UserInfoContext } from './UserInfoContext'

const Profile = () => {
  const [active, setActive] = useState("Main");
  const {user, setUser } = useContext(UserContext)
  const {userInfo, setUserInfo } = useContext(UserInfoContext)

  const navigate = useNavigate()

  console.log("userInfo")

  console.log(userInfo)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser[0].user_name)
    }

  }, []);
 
  const handleLogout = () => {
    setUser("")
    localStorage.clear();
    navigate("/")
  };

  return (

      <div className='profile-container'>
        <div className='sidebar-container'>
          <div className='profile'>
            <div>
              <img className='pfp' src={pfp} alt="/pfp" />
              </div>          
            <div>
              <p>{user}</p>
            </div>
          </div>
        </div>

        <div className='button-container'>
          <button className='btn' onClick={() => setActive("Main")}>Summary</button >
          <button className='btn' onClick={() => setActive("Orders")}>Orders</button >
            <button className='btn' onClick={() => setActive("Account")}>Account</button>
            <button className='btn' onClick={handleLogout}>Logout</button>

        </div>

        <div className='right-container'>
          {active === "Main" && <Main />}
          {active === "Orders" && <Orders />}
          {active === "Account" && <Account />}
        </div>     

      </div > 
  )
}

export default Profile