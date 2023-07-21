import React from 'react'
import "../notFound/not-found.css"
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='not-found'>404.. Page not found
      <button className='error-btn' onClick={() => navigate('/')}>Go Home</button>
    </div>
  )
}

export default NotFound