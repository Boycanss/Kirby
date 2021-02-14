import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/navbar'

import Cart from './Pages/Cart/cart'
import Home from './Pages/Home/home'

export default class routes extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </>
    )
  }
};



