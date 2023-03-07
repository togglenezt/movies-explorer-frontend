import React from 'react';
import { Link } from "react-scroll";

import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <Link to="about" className="nav-tab__link" smooth={true} duration={530}>
        О проекте
      </Link>
      <Link to="techs" className="nav-tab__link" smooth={true} duration={530}>
        Технологии
      </Link>
      <Link to="about-me" className="nav-tab__link" smooth={true} duration={530}>
        Студент
      </Link>
    </nav>
  );
}

export default NavTab;
