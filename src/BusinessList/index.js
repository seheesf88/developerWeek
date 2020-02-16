import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../NavBar'
import ListComponent from '../ListComponent'

class BusinessList extends Component {
  constructor(){
    super()
    this.state = {
      // name : '',
      // stNum : '',
      // stName : '',
      // city : '',
      // state : ''
      stores : []
    }
  }

  componentDidMount(){
    const keyword = localStorage.getItem('keyword')
    //console.log('what is keyword', keyword);
    this.getBusiness(keyword);
  };

  //Get Business
  getBusiness = async(keyword) => {
      //console.log('what is keyword2', keyword);
    try{
      const response = await fetch(`https://api.tomtom.com/search/2/poiSearch/${keyword}.json?key=uxpKuXj0ya35RZWhRPXJ1py9sfGZh0Ob&categorySet=7315&countrySet=us`)

      if(!response.ok){
        throw Error(response.statusText)
      }

      const businessParsed = await response.json();
      console.log(businessParsed);

      if(businessParsed.totalResults === 0){
        alert('Please enter another keywords...?')
      }else{

        this.setState({
          stores : businessParsed.results
        })
        // for(let i = 0; i < businessParsed.results.length; i++){
        //   let each = businessParsed.results[i];
        //   console.log('ignore?');
        //   console.log('true?', each.address.municipality );
        //   if(each.address.municipality === 'San Francisco'){
        //
        //     this.setState({
        //       store: each
        //       // name: each.poi.name,
        //       // stNum : each.address.streetNumber,
        //       // stName : each.address.streetName,
        //       // city : each.address.municipality,
        //       // state : each.address.countrySubdivision
        //     })
        //   }else {
        //     continue
        //   }

      }
    }catch(err){
      return err
    }
  }


  getItem = async() => {
    try{
      const response = await fetch('http://localhost:9000/api/v1/Item', {
        credentials: 'include',
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      const itemParsed = await response.json();

      // const flightReports = reportsParsed.data.map((reports) => {
      //   if(reports.flightNum === flightNumber){
      //     this.setState({
      //       flReports : true
      //     })
      //   }
      // })

    }catch(err){
      return err
    }
  };



  render(){
    console.log('>>',this.state.store);
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-2 my-5">
              <div className="text-center">
                <Link to="/customer">
                  <div className="text-dark h6 px-3 pt-1">
                    Back to Search
                    </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8" offset-2>
              <ListComponent lists={this.state.stores}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessList
