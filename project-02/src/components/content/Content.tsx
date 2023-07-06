import React, { Component } from 'react'
import HomePage from '../../pages/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../../pages/aboutPage/AboutPage'
import ProfilePage from '../../pages/profilePage/ProfilePage'
import { ContactPage } from '@mui/icons-material'
// import Customer from '../customer/Customer'
// import Count from '../count/Count'

export default class Content extends Component {
  render() {
    return (
      <div className='flex pt-10'>
        {/* <Customer 
        {...{id:"S001",name:"piyumal",address:"galle",salary:"25000"}}/>
        <Customer 
        {...{id:"S002",name:"nipuna",address:"galle",salary:"25000"}}/>
        <Customer 
        {...{id:"S003",name:"chamara",address:"matara",salary:"35000"}}/>
        <Customer 
        {...{id:"S004",name:"kasun",address:"colombo",salary:"25000"}}/>


      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <Count {...{initValues:10}}/> */}



      
        
      </div>
    )
  }
}
