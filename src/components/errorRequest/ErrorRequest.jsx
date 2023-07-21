import React from 'react'
import "./errorRequest.css"
import { useNavigate } from 'react-router-dom'
const ErrorRequest = ({error}) => {
    const navigate = useNavigate()
  return (
    <div className='error-container'>
        <h1>An error occurred: {error}</h1>
        <button className='error-btn' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default ErrorRequest