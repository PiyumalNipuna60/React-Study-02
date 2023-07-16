import React, { Component } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";

export default class Header extends Component {
  render() {

    const navStyle="text-red-700  font-bold border-b-2 border-b-red-700";

    return (
      <div className="bg-green-400 border-gray-200 px-4 h-16  dark:bg-gray-600 font-Poppins text-white  rounded-xl ">
        <div className="w-full h-full drop-shadow-xl">
        <div className="flex w-full h-full items-center">
        <img src={logo} alt='logo' className='w-16 h-16'/>
          <div className='w-1/2'>
          <h2>KTN Company</h2>
          </div>
          <div className=' w-2/4 '>
            <nav className='flex gap-3 space-x-2 w-full justify-between'>
            <NavLink to={"/"} className={({isActive})=>(isActive ? navStyle : "")}>
              Home
            </NavLink>

            <NavLink to={"/about"} className={({isActive})=>(isActive ? navStyle : "")}>
              About
            </NavLink>

            <NavLink to={"/profile"} className={({isActive})=>(isActive ? navStyle : "")}>
              Profile
            </NavLink>

            <NavLink to={"contact"}  className={({isActive})=>(isActive ? navStyle : "")}>
               Contact
            </NavLink>

            <NavLink to={"/login"}  className={({isActive})=>(isActive ? navStyle : "")}><ExitToAppIcon />
            </NavLink>
            </nav>
          </div>
        </div>
        </div>  
      </div>
    )
  }
}

