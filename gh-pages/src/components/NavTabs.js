import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavTabs.css";

function NavTabs() {
  return (
    <ul className="nav nav-tabs topnav">
      <li className="nav-item">
        {/* Used code from 13.3.6 coursework for Navbar layout */}
        {/* NavLink is the same as using an <a> tag e.g <a href="/about">About</a>*/}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>

      <h2 className="title">My Portfolio</h2>
    </ul>
  );
}

export default NavTabs;
