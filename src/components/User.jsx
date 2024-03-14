import React from 'react'
import user from '../assets/image.png'

const User = () => {
  return (
    <div className='pt-5 ps-2'>
      <img src={user} />
      <h5 className='pt-3'>Jhon Doe</h5>
      <h6>jhondoe</h6>
      <p className='pt-3 text-white'>UI Developer | Lets's redesign the world</p>
      <p className='pt-3'>2957 likes .</p>
    </div>
  )
}

export default User