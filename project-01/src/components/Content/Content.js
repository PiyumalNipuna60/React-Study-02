import React, { Component } from 'react'
import Customer from '../Customer/Customer'

export default class Cuntent extends Component {
  render() {
    return (
      <div className='flex'>
        <Customer />
        <Customer />
        <Customer />
        <Customer />
      </div>
    )
  }
}
