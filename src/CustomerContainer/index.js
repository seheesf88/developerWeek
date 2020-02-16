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
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="keyword" onChange={this.handleInput}/>
          </div>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default CustomerContainer
