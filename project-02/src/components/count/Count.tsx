
import React, { Component } from 'react'

type CountProps={
    initValues:number;
}

type CountState={
    count:number;
}

export default class Count extends Component <CountProps,CountState>{
    constructor(props:CountProps){
        super(props);
        this.state={
            count:this.props.initValues,
        }
    }


  render() {
    return (
        <div className='bg-gray-300 w-1/3 h-64 p-2 flex flex-col justify-center items-center m-3 rounded-2xl'>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
