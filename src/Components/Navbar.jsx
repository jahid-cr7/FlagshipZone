import { ShoppingCart } from 'lucide-react';
import React from 'react';

import { MdBookmarkAdd } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { NavLink, Link } from 'react-router';

const Navbar = () => {
    return (
<div className="navbar bg-base-100 shadow-sm work max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to={'/'}>Home</Link></li>
        <li>
          <Link to={'/about'}>About</Link>
          
        </li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
      </ul>
    </div>
    <Link to={'/'} className="font-bold"><span className='share lg:text-2xl text-xl text-amber-500'>Flagship</span> <span className='share lg:text-2xl text-xl '>Zone</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal hidden lg:flex px-1 items-center ">
      <li>
        <NavLink className={({isActive})=> isActive ? 'text-indigo-500' : ''} to={'/'}>Home</NavLink>
        </li>
      <li>
        <NavLink className={({isActive})=> isActive ? 'text-indigo-500' : ''} to={'/about'}>About</NavLink>
        </li>
       <li>
        <NavLink className={({isActive})=> isActive ? 'text-indigo-500' : ''} to={'/Contact'}>Contact Us</NavLink>
        </li> 
       <Link to={'/cart'}><FaCartPlus size={20} className='mx-3' />
       </Link>
       <Link to={'/bookmark'}><MdBookmarkAdd size={20}  className='mx-3' /></Link>
    </ul>
    <a className="btn bg-amber-500 text-black text-[15px] hover:bg-blue-500 mr-3 sm:hidden ">Sign Up</a>
    <a className="btn bg-gray-500 text-white text-[15px] hover:bg-amber-500 hover:text-black">Login</a>
    
  </div>
</div>
    );
};

export default Navbar;