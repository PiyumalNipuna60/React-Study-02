import React, { Component } from 'react'
import Customer from '../Customer/Customer'

export default class Cuntent extends Component {
  render() {
    return (
      <div className='flex'>
        <Customer {...{
          id:"C001",
          name:"kamal",
          address:"galle",
          salary:"25000"
          
         }}/>

        <Customer {...{
          id:"C002",
          name:"sadun",
          address:"galle",
          salary:"25000"
          
         }}/>

        <Customer {...{
          id:"C003",
          name:"charith",
          address:"galle",
          salary:"25000"
          
         }}/>

        <Customer {...{
          id:"C004",
          name:"nipuna",
          address:"galle",
          salary:"25000"
          
         }}/>
        
      </div>
    )
  }
}
