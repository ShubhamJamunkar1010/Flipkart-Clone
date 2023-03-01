import React from 'react'
import './OrderPlaced.css'
import { NavLink } from 'react-router-dom'

export const OrderPlaced = () => {
  return (
    <div className='order'>
                <div>Congratulations..!!</div> 
        <div>Your Order is Placed Successfully</div> 
        <NavLink to='/home'>
        <button className='go-btn'>Go back to Home</button>
        </NavLink>
    </div>
  )
}
