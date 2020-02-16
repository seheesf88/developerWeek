import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../NavBar';
import BusinessList from '../BusinessList';

class BusinessContainer extends Component {
  constructor(){
    super()
  }




  render(){
    return (
      <div>
        <NavBar />
        <div>
          <input />
        </div>
        <BusinessList />
      </div>
    )
  }
}

export default BusinessContainer
