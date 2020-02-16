import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../NavBar';

class ItemContanier extends Component {
  constructor(){
    super()
    this.state = {
      item : {
        itemName : '',
        qty: '',
        oriPrice: '',
        discount: '',
      }
    }
  }

  handleInput = (e) => {
    console.log(e.target.value)
    this.setState({
      item : {
        ...this.state.item,
        [e.target.name]: e.target.value
      }
    })
  }

  addItem = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch('http://localhost:9000/api/v1/item', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(this.state.item),
          headers: {
            'Content-Type' : 'application/json'
          }
        });

        if(!response.ok){
          throw Error(response.statusText)
        }

        const parsedCreateItem = await response.json();

        this.props.history.push('/');

      } catch(err) {
        return err
      }
    }



  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-2">
            <form onSubmit={this.addItem}>
              <div className="form-group" >
                Item
                <input className="form-control" name="itemName" onChange={this.handleInput}/>
              </div>
              <div className="form-group">
                Qty
                <input className="form-control" name="qty" onChange={this.handleInput}/>
              </div>
              <div className="form-group">
                Original Price
                <input className="form-control" name="oriPrice" onChange={this.handleInput}/>
              </div>
              <div className="form-group">
                Discount(%)
                <input className="form-control" name="discount" onChange={this.handleInput}/>
              </div>
              <div className="form-group">
                
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default ItemContanier


// <form className="">
//   <div className="form-group">
//   Item Name:<input name="item" type="text" className="form-control" onChange={this.handleInput} required/>
//   </div>
//
//   <button type="submit">Sale</button>
// </form>
