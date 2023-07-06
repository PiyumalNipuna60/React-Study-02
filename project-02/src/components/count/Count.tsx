

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


    /*    set Alart print and state set   */
    bindEvent = () =>{
        this.setState({count:this.state.count-1})
    }


    bindEvent2 =() =>{
        this.setState({count:this.state.count+1})
    }


  render() {

/*    set Alart print   */
    //   function bindEvent(): void {
         
    //   }

    //   function bindEvent2(): void {
    //     alert("hyy222")
    //   }

    return (
        <div className='bg-gray-300 w-1/3 h-64 p-2 flex flex-col justify-center items-center m-3 rounded-2xl'>
        <h1>{this.state.count}</h1>

        <div className='flex pt-5'>
            <button className='text-4xl border-4 w-12 border-rose-700 rounded-lg mr-5' onClick={this.bindEvent}>-</button>
            <button className='text-4xl border-4 w-12 border-rose-700 rounded-lg' onClick={this.bindEvent2}>+</button>
        </div>
      </div>
    )
  }
}
