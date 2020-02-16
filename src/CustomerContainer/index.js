import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../NavBar';



class CustomerContainer extends Component {
  constructor(){
    super();

    this.state = {
      keyword: ''
    }
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('keyword', this.state.keyword)
    this.props.history.push('/customer/businesslist')
  }


  render(){
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row mt-5">
            <div className="col-4 offset-4 mt-5">
              <form onSubmit={this.handleSubmit} className="mt-5">
                <div>
                  <input type="text" name="keyword" onChange={this.handleInput}
                    className="form-control"
                  />
                </div>
                <button className="btn btn-danger mt-3 offset-4"><div className="text-light h4">Search</div></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomerContainer
