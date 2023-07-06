import React, { Component } from 'react'
import Customer from '../customer/Customer'

export default class Content extends Component {
  render() {
    return (
      <div className='flex pt-10'>
        <Customer 
        {...{id:"S001",name:"piyumal",address:"galle",salary:"25000"}}/>
        <Customer 
        {...{id:"S002",name:"nipuna",address:"galle",salary:"25000"}}/>
        <Customer 
        {...{id:"S003",name:"chamara",address:"matara",salary:"35000"}}/>
        <Customer 
        {...{id:"S004",name:"kasun",address:"colombo",salary:"25000"}}/>


      
      </div>
    )
  }
}
