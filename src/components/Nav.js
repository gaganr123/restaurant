import React from 'react';
import logo from '../img/logo_svg.svg'
import scooter from '../img/scooter.svg'
import { Link } from "react-router-dom";
import './home.css'
import phone from '../img/phone1.gif'


const Nav = () => (
  <>
    {/* <div className='bg-red-300 hover:bg-blue-100'>
  aaaaaa
  </div> */}
    <div className="navBar w-full p-2 fixed z-20 bg-white">

      <div className='sidebar' >
      <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </div>

      <div className="flex-0 ">
        <img src={logo} alt="logo" className="h-full w-40 py-4 " />
      </div>
      <div className="flex-1 NavMidDiv">
        <div className=" flex flex-row justify-center   font-bold text-xl text-gray-700 ">
          <div className="px-2 flex flex-row">
            <Link to="/">Home <span><i className="fa fa-angle-double-down"></i></span> </Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/menu">Menu <span ><i className="fa fa-angle-double-down"></i></span> <span></span></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/about">About <span><i className="fa fa-angle-double-down"></i></span></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/shop">Shop <span><i className="fa fa-angle-double-down"></i></span></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/blog">Blog <span><i className="fa fa-angle-double-down"></i></span></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/page">Page <span><i className="fa fa-angle-double-down"></i></span></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/contact">Contact <span><i className="fa fa-angle-double-down"></i></span></Link>
          </div>
        </div>
      </div>
      <div className="flex-0">
        <div className=" scooty flex lg:flex-row gap-x-2 flex-col xl:flex-row  pr-2 ">
          <img src={scooter} alt="scooty" className="h-10 w-15" />
          <div className="flex flex-col">
            <div className="flex items-center font-bold">Call and Order in:</div> <div className='text-green-400'>+977-12345679</div>

          </div>
        </div>
        <div className='phone'>
              <img src={phone} alt="C" className='w-10 h-10' />
        </div>
      </div>
    </div>

    <div className='NavbottomDiv flex flex-row justify-around fixed bottom-0 bg-pink-600 w-full py-2'>
      <div>
        <i className="fa fa-shopping-basket fa-2x" aria-hidden="true"></i>
      </div>
      <div>
        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
      </div>
      <div>
        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
      </div>
      
    </div>

  </>
);

export default Nav;

