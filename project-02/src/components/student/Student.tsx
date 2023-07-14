import { Paper } from '@mui/material'
import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div>
         <Paper elevation={3} className='p-10 text-center'>
          <h3 className='text-4xl font-semibold'>S001</h3>
          <h2 className='text-3xl'>Piyumal</h2>
          <p className='text-2xl'>matara</p>
        <div className="flex mt-2 gap-4 justify-center">
          <span className='p-3 border rounded'>Maths</span>
          <span className='p-3 border rounded'>Science</span>
          <span className='p-3 border rounded'>Sinhala</span>
        </div>
        </Paper>
      </div>
    )
  }
}
