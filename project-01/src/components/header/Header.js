import React, { Component } from 'react'
import userImage from "../../assets/user.png";
import LogoutIcon from '@mui/icons-material/Logout';

export default class Header extends Component {
  render() {
    return (
      <div className="bg-green-400 border-gray-200 px-4 h-16  dark:bg-gray-600 font-Poppins text-white  rounded-xl">
        <div className="w-full h-full drop-shadow-xl">
        <div className="flex w-full h-full items-center">
          <div className='w-1/2'>
          <h2>KTN Company</h2>
          </div>
          <div className=' w-2/4 '>
            <nav className='flex gap-3 space-x-2 w-full justify-between'>
            <h2 className='font-serif'>Home</h2>
            <h2 className='font-serif'>About</h2>
            <h2 className='font-serif'>Contact</h2>
            <img src={userImage} className='w-8 h-8'/>
            <nav><LogoutIcon />
            </nav>
            </nav>
          </div>
       
        </div>
        </div>
        
      </div>
    )
  }
}

