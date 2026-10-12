import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#002147] text-white shadow">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2">
        <Link
          className="flex min-w-0 items-center gap-2"
          to="/"
          aria-label="ANOKIF Express home"
          onClick={closeMenu}
        >
          <img
            src="/anokiflogo2.png"
            alt="ANOKIF Logo"
            width="150"
            height="70"
            className="navbar-logo shrink-0"
          />
          <span className="text-sm font-bold sm:text-base">
            ANOKIF EXPRESS SERVICES LIMITED
          </span>
        </Link>

        <button
          type="button"
          className="navbar-toggler rounded p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div
          id="primary-navigation"
          className={`${open ? 'flex' : 'hidden'} w-full flex-col md:flex md:w-auto md:flex-row`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <li>
              <Link className="block rounded px-3 py-2 font-medium hover:bg-white/10" to="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link className="block rounded px-3 py-2 font-medium hover:bg-white/10" to="/services" onClick={closeMenu}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link className="block rounded px-3 py-2 font-medium hover:bg-white/10" to="/contact" onClick={closeMenu}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link className="block rounded px-3 py-2 font-medium hover:bg-white/10" to="/about" onClick={closeMenu}>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
