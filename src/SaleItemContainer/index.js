import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';



class SaleItemContainer extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 offset-2 mt-5">
            <h3>Domino Pizza</h3>

            <div><img className="menuImg" src="../pizza.jpeg" /></div>

            <div className="h5 my-5">Menu</div>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  Cheese Pizza
                </div>
                <div className="col-3">
                  was $10.99
                </div>
                <div className="col-3">
                  Now $8.99
                </div>
                <div className="col-3">
                  With <img className="tomato" src="../tomatopng.png" /> X 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SaleItemContainer




// import React, { Component } from 'react'
// import { Link, withRouter } from 'react-router-dom';
// import NavBar from '../NavBar';
//
// class SaleItemContainer extends Component {
//   constructor(){
//     super()
//   }
//
//
//
//
//   render(){
//     return (
//       <div className = "container">
//         <div className="row">
//           <div className="col-8 mt-5">
//             <h3>"Domino's"</h3>
//             <div className="h5 mt-3">Menu</div>
//             <div><img src="../pizza.jpeg" /></div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default SaleItemContainer
