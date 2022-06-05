import React from 'react';
import logo from '../img/logo_svg.svg'
import scooter from '../img/scooter.svg'
import { Link } from "react-router-dom";

const Nav = () => (
  <>
    <div className="flex flex-row w-full items-center p-2 fixed z-20 bg-white">
      <div className="flex-0">
        <img src={logo} alt="logo" className="h-full w-40 py-4 " />
      </div>
      <div className="flex-1 ">
        <div className="flex flex-row justify-center font-bold text-xl text-gray-700 lg:visible xl:visible md:invisible sm:invisible xs:invisible">
          <div className="px-2">
            <Link to="/">Home</Link>
          </div>
          <div className="px-2">
            <Link to="/menu">Menu</Link>
          </div>
          <div className="px-2">
            <Link to="/about">About</Link>
          </div>
          <div className="px-2">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="px-2">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="px-2">
            <Link to="/page">Page</Link>
          </div>
          <div className="px-2">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="flex-0">
        <div className="flex flex-row sm:flex-col md:flex-col pr-2 ">
          <img src={scooter} alt="scooty" className="h-10 w-15" />
          <span className="flex items-center font-bold">Call and Order in: <span className='text-green-400'>+977-12345679</span> </span>
        </div>
      </div>
    </div>
  </>
);

export default Nav;

