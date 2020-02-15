import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';



class NavBar extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
          <Link to="/">Home</Link>
      </div>
    )
  }
}

export default NavBar
