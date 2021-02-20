import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/navbar'
import Cart from './Pages/Cart/cart'
import Home from './Pages/Home/home'
import Details from './Pages/Home/details';

import Commerce from '@chec/commerce.js';
const commerce = new Commerce('pk_test_228485810589e825901899773fc3fb3e4eb4ed6a60fcd');


const App = () => {

  const [cartTotal, setCartTotal] = useState(0);
  
  useEffect(() => {
    commerce.cart.retrieve()
      .then((res) =>
        setCartTotal(res.total_items)
      )
  }, [])

  return (
    <>
      <Navbar cartTot={cartTotal} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category/:id">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </>
  )
}

export default App;



