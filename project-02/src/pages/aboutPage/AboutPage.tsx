import React, { Component } from 'react'
import Header from '../../components/header/Header'

export default class AboutPage extends Component {
  render() {
    return (
      <div>
         <Header />
          <div className='m-4 border'>
            <div className='mx-3'>
              <h2 className=''> About Page</h2>
            </div>
          </div>
      </div>
    )
  }
}
