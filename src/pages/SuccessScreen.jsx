import React from 'react'
import { useNavigate } from 'react-router-dom'

const SuccessScreen = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Thank you for registering</h1>
        <h5>Let's drive into chat world</h5>
        <button onClick={()=> navigate("/")}>Go to Login</button>
    </div>
  )
}

export default SuccessScreen