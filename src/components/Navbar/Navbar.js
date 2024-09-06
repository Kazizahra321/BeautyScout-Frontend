import React from 'react';
import { NavLink } from 'react-router-dom';
//import './Navbar.css'
function Navbar() {
  return (
    <div>
     
      <div>
      <ul className='nav-list'>
      
      
      <li className='logo-title'><h2>BeautyScout</h2></li>
      
            <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/start">GetStarted</NavLink></li>
            <li><NavLink className="nav-link" to="/services">Results</NavLink></li>
            <li><NavLink className="nav-link" to="/pricing">Recommends</NavLink></li>
            <li><NavLink className="nav-link" to="/contact">ContactUs</NavLink></li>
        
            
           
           
           
        </ul>
      </div>
    </div>
  )
}

export default Navbar
