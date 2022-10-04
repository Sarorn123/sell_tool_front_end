import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.clear("token");
        navigate("/login");
    }

  return (
    <div className='m-10'>
        <h1>HomePage</h1>
        <Link to={"/login"}>Go To Login</Link>
        <button className='bg-red-500' onClick={logOut}>Logout</button>
    </div>
  )
}

export default HomePage