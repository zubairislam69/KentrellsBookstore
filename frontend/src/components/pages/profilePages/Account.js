import React from 'react'
import "./Account.css"

const Account = () => {
  return (
    <div className='account-container'>
        <h1>Account Information</h1>

        <div className='personal'>
            <h2>Personal Information: </h2>
            <h4>Name: </h4>
            <h4>Username: </h4>
            <h4>Birthday: </h4>
            <h4>Email: </h4>
            <h4>Password: </h4>
            <h4>Address: </h4>
        </div>

        <div className='genre'>
            <h2>Favourite Genre: </h2>
            <h4>Genre: </h4>
        </div>

        <div className='payment'>
            <h2>Payent Information: </h2>
            <h4>Card 1: </h4>
            <h4>Card 2: </h4>
            <h4>Card 3: </h4>
        </div>
    </div>
  )
}

export default Account