import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../NavBar';



class CustomerContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default CustomerContainer
