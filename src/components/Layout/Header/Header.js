import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
function Header() {
  const [isActive, setIsActive] = useState({
    home: true,
    about: false,
    project: false,
    contact: false,
  });
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>Portfolio</h1>
      </div>

      <nav className={classes.navbar}>
        <NavLink
          to='/'
          className={`${classes.navItem} ${isActive.home ? classes.active : ''}`}
          onClick={() => {
            setIsActive({
              home: true,
              about: false,
              project: false,
              contact: false,
            });
          }}
        >
          Home
        </NavLink>
        <NavLink
          to='about'
          className={`${classes.navItem} ${isActive.about ? classes.active : ''}`}
          onClick={() => {
            setIsActive({
              home: false,
              about: true,
              project: false,
              contact: false,
            });
          }}
        >
          Abouts
        </NavLink>
        <NavLink
          to='projects'
          className={`${classes.navItem} ${isActive.project ? classes.active : ''}`}
          onClick={() => {
            setIsActive({
              home: false,
              about: false,
              project: true,
              contact: false,
            });
          }}
        >
          Projects
        </NavLink>
        <NavLink
          to='contact'
          className={`${classes.navItem} ${isActive.contact ? classes.active : ''}`}
          onClick={() => {
            setIsActive({
              home: false,
              about: false,
              project: false,
              contact: true,
            });
          }}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
