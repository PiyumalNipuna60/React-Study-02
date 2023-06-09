import React, { Component } from 'react'

type CustomerProps={
    id:String;
    name:String;
    address:String;
    salary:String;
}

export default class Customer extends Component <CustomerProps>{
    
     // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-useless-constructor
constructor(props:CustomerProps){
    super(props);
}

  render() {
    return (
      <div className='bg-gray-300 w-1/3 h-64 p-2 flex flex-col justify-center items-center m-3 rounded-2xl'>
        <h1>{this.props.id}</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.address}</h1>
        <h1>{this.props.salary}</h1>
      </div>
    )
  }
}
