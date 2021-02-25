import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/navbar'
import Cart from './Pages/Cart/cart'
import Home from './Pages/Home/home'
import Details from './Pages/Home/details';

const App = () => {

  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/"
          render={(props) => <Home {...props} />}
        />
        <Route exact path="/category/:id"
          render={(props) => <Home {...props} />}
        />
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/details/:id"
          render={(props) => <Details {...props} />}
        />
      </Switch>
    </>
  )
}

export default App;



