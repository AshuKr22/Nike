import React from "react";
import { NavLink } from "react-router-dom";
import SVGComp from "./SVGComp";
import { motion } from "framer-motion";
function Header()
{
    return(
    <div className="navbar bg-base-100">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>MEN</a></li>
        <li>
          <a>KIDS</a>
          <ul className="p-2">
            <li><a>GIRL</a></li>
            <li><a>BOY</a></li>
          </ul>
        </li>
        <li><a>WOMEN</a></li>
      </ul>
    </div>
    <a ><SVGComp
    
    /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>MEN</a></li>
      <li>
        <details>
          <summary>KIDS</summary>
          <ul className="p-2">
            <li><a>GIRL</a></li>
            <li><a>BOY</a></li>
          </ul>
        </details>
      </li>
      <li><a>WOMEN</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text"></span> 
    <input type="checkbox" className="toggle" checked />
  </label>
</div>
  </div>
</div>
    )
}
export default Header