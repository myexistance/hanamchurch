
import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../asset/mainlogo.png";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo} alt="Logo" className="logo"/>
      </Link>
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={closeMenu}>교회 소개</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>교역자</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={closeMenu}>온라인 예배</NavLink>
        </li>
        <li>
          <NavLink to="/column" onClick={closeMenu}>컬럼</NavLink>
        </li>
        <li>
          <NavLink to="/board" onClick={closeMenu}>소식지</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>연락처</NavLink>
        </li>
      </ul>
    </nav>
  );
};
