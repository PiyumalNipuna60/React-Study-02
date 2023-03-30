
import React, { Component } from 'react'



export default class Content extends Component (props){
  render() {
    return (
      <div className='m-4 border'>
        <div className='mx-3'>
            content {props.food}</div>
      </div>
      
    )
  }
}
