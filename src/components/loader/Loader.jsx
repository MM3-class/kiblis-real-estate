import React from 'react'
import "./loader.css"
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='loader'>
        <InfinitySpin color='#1DAEFF'/>
    </div>
  )
}

export default Loader