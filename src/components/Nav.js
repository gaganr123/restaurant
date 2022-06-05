import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => (
  <>
    <ul>
      <li style={{display:'inline',padding:'10px'}}><Link to="/">Home</Link></li>
      <li style={{display:'inline',padding:'10px'}}><Link to="/about">About</Link></li>
      <li style={{display:'inline',padding:'10px'}}><Link to="/topic">Topic</Link></li>
    </ul>
  </>
);

export default Nav;

