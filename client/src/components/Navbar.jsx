import React from 'react'
import './Components.css'
import listIcon from '../Icons/list.svg'

function Navbar() {

  return (
    <div className='Navbar'>
      <div className="navebar_logo">
          <img  src={listIcon} alt="" />
          <div className="navebar_text">Notes</div>
      </div>
    </div>
  )
}

export default Navbar