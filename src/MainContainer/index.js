import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';



class MainContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h1>this is home</h1>
          <Link to="/customer">Customer</Link>
          <Link to="/business">Business</Link>
      </div>
    )
  }
}

export default MainContainer
