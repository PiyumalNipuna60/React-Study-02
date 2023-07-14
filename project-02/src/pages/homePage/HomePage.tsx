import React, { Component } from 'react'
import Student from '../../components/student/Student'

export default class HomePage extends Component {
  render() {
    return (
      <div className='flex m-auto p-5 justify-center gap-3'>
        <Student />
        <Student />
        <Student />
      </div>
    )
  }
}
