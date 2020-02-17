import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

//Routes

import MainContainer from './MainContainer';
import BusinessContainer from './BusinessContainer';
import CustomerContainer from './CustomerContainer';
import BusinessList from './BusinessList';
import SaleItemContainer from './SaleItemContainer';


const my404 = () => {
  return (
    <div>
      !... error :( ...!
    </div>
  )
}
const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component = { MainContainer } />
        <Route exact path="/business" component = { BusinessContainer } />
        <Route exact path="/customer" component = { CustomerContainer } />
        <Route exact path="/customer/businesslist" component = { BusinessList } />
        <Route exact path="/example" component = { SaleItemContainer } />
      </Switch>
    </main>
  );
}

export default App;
