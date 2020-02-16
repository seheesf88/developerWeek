import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';



class MainContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="py-5">
        <div className="text-center">
          <img className="logo-1" src="../logo-1.JPG" />
        </div>
        <div className="container">
          <div className="row offset-1">
            <div className="col-2 offset-3 bg-danger px-1 py-3 rounded h4 text-center"><Link to="/customer" className="text-light">Customer</Link></div>
            <div className="col-2 offset-1 bg-danger px-1 py-3 rounded h4 text-center"><Link to="/business" className="text-light">Entrepreneur</Link></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
