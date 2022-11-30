import React, {useEffect, useState} from 'react'
import "./Account.css"

const Account = () => {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserInfo(foundUser[0])
    }
  }, []);

  return (
    <div className='account-container'>
        <h1>Account Information</h1>
        <div className='personal'>
            <h2>Personal Information </h2>
            <h4>Username: {userInfo.user_name} </h4>
            <h4>Email: {userInfo.email}</h4>
            <h4>Age: {userInfo.age}</h4>
            <h4>Password: {userInfo.password}</h4>
            <h4>Birth Place: {userInfo.birth_place}</h4>
            <h4>Shipping Address: {userInfo.shipping_address}</h4>
        </div>
        <div className='genre'>
            <h2>Favourite Genre: </h2>
            <h4>Genre: </h4>
        </div>
        <div className='payment'>
            <h2>Payment Information: </h2>
            <h4>Card 1: </h4>
            <h4>Card 2: </h4>
            <h4>Card 3: </h4>
        </div>
    </div>
  )
}

export default Account