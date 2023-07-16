import { Paper } from '@mui/material'
import React, { Component } from 'react'

type StudentProps={
  id:String;
  name:String;
  address:String;
  subject:String[];
}

type StudentState={}

export default class Student extends Component<StudentProps, StudentState> {
  render() {
    return (
      <div>
         <Paper elevation={3} className='p-10 text-center'>
          <h3 className='text-4xl font-semibold'>{this.props.id}</h3>
          <h2 className='text-3xl'>{this.props.name}</h2>
          <p className='text-2xl'>{this.props.address}</p>
        <div className="flex mt-2 gap-4 justify-center">
          <span className='p-3 border rounded'>{this.props.subject[0]}</span>
          <span className='p-3 border rounded'>Science</span>
          <span className='p-3 border rounded'>Sinhala</span>
        </div>
        </Paper>
      </div>
    )
  }
}
