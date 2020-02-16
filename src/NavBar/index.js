import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';



class NavBar extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="mt-5 mb-3 ml-5">
        <Link to="/" className="text-dark px-3 py-2 rounded"><img className="logo-2" src="../logo-2.JPG" /></Link>
      </div>
    )
  }
}

export default NavBar
