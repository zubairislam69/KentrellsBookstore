import React, { useState, useEffect, useContext } from 'react'
import "./Profile.css"
import pfp from "../images/anonPFP.png"
import Main from "./profilePages/Main"
import Orders from "./profilePages/Orders"
import Account from "./profilePages/Account"
import Axios from 'axios'

import { useNavigate } from "react-router-dom";

import { UserContext} from './UserContext'
import { UserInfoContext } from './UserInfoContext'

const Profile = () => {
  const [active, setActive] = useState("Main");
  const {user, setUser } = useContext(UserContext)
  const { userInfo, setUserInfo } = useContext(UserInfoContext)
  const [profileID, setProfileID] = useState()

  const navigate = useNavigate()

  const [orders, setOrders] = useState()


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser[0].user_name)
      setProfileID(foundUser[0].profileID)
    }
  }, []);
 
  const handleLogout = () => {
    setUser("")
    localStorage.clear();
    navigate("/")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderProfileID = { profileID: profileID };

    const response2 = await Axios.post(
      "http://localhost:5000/orders",
      orderProfileID,
    );

    setOrders(response2.data)
    setActive("Orders")
  }

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
        <button className='btn' onClick={handleSubmit}>Orders</button >
          <button className='btn' onClick={() => setActive("Account")}>Account</button>
          <button className='btn' onClick={handleLogout}>Logout</button>
        </div>
        <div className='right-container'>
          {active === "Main" && <Main />}
          {active === "Orders" && <Orders orderInfo={orders} />}
          {active === "Account" && <Account />}
        </div>     
      </div > 
  )
}

export default Profile