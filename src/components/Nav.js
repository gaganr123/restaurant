import React from 'react';
import logo from '../img/logo_svg.svg'
import scooter from '../img/scooter.svg'
import { Link } from "react-router-dom";

const Nav = () => (
  <>
  {/* <div className='bg-red-300 hover:bg-blue-100'>
  aaaaaa
  </div> */}
    <div className="flex flex-row w-full items-center p-2 fixed z-20 bg-white">
      <div className="flex-0">
        <img src={logo} alt="logo" className="h-full w-40 py-4 " />
      </div>
      <div className="flex-1 ">
        <div className="flex flex-row justify-center font-bold text-xl text-gray-700 lg:visible xl:visible md:invisible sm:invisible xs:invisible">
          <div className="px-2 flex flex-row">
            <Link to="/">Home <sapn><i class="fa fa-angle-double-down"></i></sapn> </Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/menu">Menu <sapn className="invisible hover:visible"><i class="fa fa-angle-double-down"></i></sapn> <sapn></sapn></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/about">About <sapn><i class="fa fa-angle-double-down"></i></sapn></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/shop">Shop <sapn><i class="fa fa-angle-double-down"></i></sapn></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/blog">Blog <sapn><i class="fa fa-angle-double-down"></i></sapn></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/page">Page <sapn><i class="fa fa-angle-double-down"></i></sapn></Link>
          </div>
          <div className="px-2 flex flex-row">
            <Link to="/contact">Contact <sapn><i class="fa fa-angle-double-down"></i></sapn></Link>
          </div>
        </div>
      </div>
      <div className="flex-0">
        <div className="flex lg:flex-row gap-x-2 flex-col xl:flex-row  pr-2 ">
          <img src={scooter} alt="scooty" className="h-10 w-15" />
          <div className="flex flex-col">
          <div className="flex items-center font-bold">Call and Order in:</div> <div className='text-green-400'>+977-12345679</div> 

          </div>
        </div>
      </div>
    </div>
  </>
);

export default Nav;

