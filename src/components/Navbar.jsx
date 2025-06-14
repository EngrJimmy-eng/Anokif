import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
  <img
    src="/anokiflogo2.png"
    alt="ANOKIF Logo"
    width="150"
    height="70"
    className="me-2"
  />
  <span className="fw-bold">ANOKIF EXPRESS SERVICES LIMITED</span>
</a>

        <button className="navbar-toggler border-0" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
