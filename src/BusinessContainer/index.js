import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../NavBar';
import ItemContanier from '../ItemContanier';

class BusinessContainer extends Component {
  constructor(){
    super()
  }




  render(){
    return (
      <div>
        <NavBar />
        <ItemContanier />
      </div>
    )
  }
}

export default BusinessContainer
