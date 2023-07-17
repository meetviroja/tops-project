import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  let username = sessionStorage.getItem("username")
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleNavbar}>Home</Link>
          <Link to="/About" onClick={toggleNavbar}>About</Link>
          {/* <Link to="/Logandreg  " onClick={toggleNavbar}>log in</Link> */}
          <Link to="/Concat" onClick={toggleNavbar}>Contact</Link>
          <Link to="/adminpenal" onClick={toggleNavbar}>Admin</Link>
          <Link>{(username == undefined) ? <Link className='nav-link' to="/login">Login</Link> : <Link className='nav-link' to="/logout">Logout</Link>}</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <i className={`fas fa-bars ${isOpen ? 'active' : ''}`} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
