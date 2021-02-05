import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
    <div className="header__logo">
   <img src="https://media-exp1.licdn.com/dms/image/C560BAQGzlBEyGMgj-w/company-logo_200_200/0/1606315894730?e=2159024400&v=beta&t=1mUcgGobL55GOfRmWRTLMaPat2PNtnHrRw0_DypxpTs" alt="logo"/>
    </div>
    </Link>
    <div className="header__nav">
    <p><a href="#" className="nav__link">JOBS</a></p>
    <p><a href="#" className="nav__link">CAREERS</a></p>
    <p><a href="#" className="nav__link">COMPANIES</a></p>
    <p><a href="#" className="nav__link">LOGIN</a></p>
    </div>
    </div>
  )
}

export default Header
