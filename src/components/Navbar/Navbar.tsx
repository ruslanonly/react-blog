import React from 'react'
import Links from './Links'
import "./index.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <nav className="nav">
          <Links/>
        </nav>
      </div>
    </div>
    
  )
}
