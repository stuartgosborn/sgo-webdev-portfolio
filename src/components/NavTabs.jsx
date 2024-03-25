import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const [showDropdown, setShowDropdown] = useState(false);
  const currentPage = useLocation().pathname;

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <ul className={`nav nav-pills flex-sm-column menu${showDropdown ? ' show-dropdown' : ''}`}>
        <li id='thumbNailContainer'>
          <img id="thumbNail" src='/igThumbnail.jpeg' alt="Stuart Osborn" />
          <span>Stuart G. Osborn</span>
        </li>
        <li className="nav-item home">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item about">
          <Link
            to="/About"
            className={currentPage === "/About" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li className="nav-item portfolio">
          <Link
            to="/Portfolio"
            className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item contactli">
          <Link
            to="/Contact"
            className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item resume">
          <Link
            to="./Resume"
            className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </Link>
        </li>
        {/* Dropdown menu for small screens */}
        <li className="nav-item dropdown d-sm-none">
          <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
            Menu
          </button>
          <div className={`dropdown-menu${showDropdown ? ' show' : ''} dropdown`}>
            <Link to="/" className="dropdown-item">Home</Link>
            <Link to="/About" className="dropdown-item">About</Link>
            <Link to="/Portfolio" className="dropdown-item">Portfolio</Link>
            <Link to="/Contact" className="dropdown-item">Contact</Link>
            {/* <Link to="/Resume" className="dropdown-item">Resume</Link> */}
          </div>
        </li>
      </ul>
    </>
  );
}

export default NavTabs;
