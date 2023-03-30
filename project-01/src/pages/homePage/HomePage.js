import React, { Component } from 'react'
import Content from '../../components/content/Content'
import Header from '../../components/header/Header'




export default class HomePage extends Component {
  render() {
    return (
      <div>
          <Header/>
       <Content/>
      </div>
    )
  }
}
