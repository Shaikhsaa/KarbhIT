import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import About from './About';
import { Button } from './Button';
import Homepage from './Homepage';



const Navbar = () => {
  return (
    <>
    <nav className='nav_class'>

   <div className='logo'> Karbh IT Solutions</div>
    
    <div className='nav_class1'>
      {/* <Homepage />  */}
        {/* <NavLink to="/">Home  </NavLink>
        <NavLink to="/about"> About  </NavLink> */}
        <NavLink to="/contact"> Contact </NavLink>
        <NavLink to="/api"> Api </NavLink>  
        <NavLink to="/settings">Setting</NavLink>
    </div>
    </nav>
    </>
  );
};

export default Navbar;