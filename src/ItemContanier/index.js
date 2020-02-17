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
        oriPrice: 0,
        discount: 0,
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
    var newprice = this.state.oriPrice * (100 - this.state.discount)/100

    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-11">
            <form onSubmit={this.addItem}>
              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>
              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>

              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>

              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>

              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>

              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>

              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>

              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>

              <div className="form-inline offset-1 mt-2">
                <div className="ml-3 mr-1">Item:</div>
                  <input className="form-control col-3" name="itemName" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Qty:</div>
                  <input className="form-control col-1" name="qty" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Original Price:</div>
                  <input className="form-control col-1" name="oriPrice" onChange={this.handleInput}/>
                <div className="ml-3 mr-1">Discount(%):</div>
                  <input className="form-control col-1" name="discount" onChange={this.handleInput}/>
                <div className="ml-2">New Price:</div>
                  <div className="ml-1">$0.00</div>
              </div>


              <div className="text-right mt-5">
                <button className="btn btn-primary">Submit</button>
              </div>
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
