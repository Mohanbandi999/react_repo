import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to='/add'>Add</NavLink>
            <NavLink to='/list'>List</NavLink>
            <NavLink to='/parent'>Parent</NavLink>
        </nav>
      
    </div>
  );
}

export default Navbar;