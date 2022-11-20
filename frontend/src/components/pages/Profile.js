import React, { useState } from 'react'
import "./Profile.css"
import pfp from "./images/anonPFP.png"
import Main from "./profilePages/Main"
import Orders from "./profilePages/Orders"
import Account from "./profilePages/Account"

const Profile = () => {
  const [active, setActive] = useState("Main");

  return (
    <div className='container'>
      <div className='sidebar-container'>
        <div className='profile'>
          <div>
            <img className='pfp' src={pfp} alt="/pfp" />
          </div>

          <div>
            <p>Anonymous User</p>
          </div>
        </div>  
      </div>

      <div className='button-container'>
        <button onClick={ () => setActive("Main") }>Summary</button >
        <button onClick={ () => setActive("Orders") }>Orders</button >
        <button onClick={ () => setActive("Account") }>Account</button>
      </div>

      <div className='main-container'>
          {active === "Main" && <Main />}
          {active === "Orders" && <Orders />}
          {active === "Account" && <Account />}
      </div>

      {/* <div className='sidebar-container'>
        <div className='profile'>
          <div>
            <img className='pfp' src={pfp} alt="/pfp" />
          </div>

          <div>
            <p>Anonymous User</p>
          </div>

          <div>
            <button onClick={ () => setActive("Main") }>Summary</button >
          </div>
          <div>
            <button onClick={ () => setActive("Orders") }>Orders</button >
          </div>
          <div>
            <button onClick={ () => setActive("Account") }>Account</button>
          </div>
        </div>   
      </div>

      <div className='main-container'>
          {active === "Main" && <Main />}
          {active === "Orders" && <Orders />}
          {active === "Account" && <Account />}
      </div> */}

      {/* <div className='sidebar-container'>
        <div className='profile'>
          <div>
            <img className='pfp' src={pfp} alt="/pfp" />
          </div>

          <div>
            <p>Anonymous User</p>
          </div>
        </div>

        <div className='orders'>
          <Link to='orders' activeClass='active' smooth={true} spy={true} offset={-50} duration={500}>
            <button type="button">
              Orders
            </button>
          </Link>
        </div>

        <div className='account'>
          <Button onClick={account}>
            Account
          </Button>
        </div>     
      </div>

      <div className='main-container'>
        <h1>main</h1>
      </div> */}

    </div>
  )
}

export default Profile