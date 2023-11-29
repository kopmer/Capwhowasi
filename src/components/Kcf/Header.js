import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import "./Header.css";
const Header = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <header>
      <nav>
        <Link to ="/" className='title'>누구였소</Link>
        <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink to ="/UploadPage">사진 업로드</NavLink>
          </li>
          <li>
            <NavLink to = "/ListPage">등록인물</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
  
};

export default Header;