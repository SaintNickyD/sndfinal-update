import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Setups from './Setups';
import $$$ from './$$$';
import OnTop from './OnTop';
import SignUp from './SignUp';
import Checkout from './Checkout';
import Orders from './Orders';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe( "pk_test_51JV2k6ApNuLg9chQA5iMap0gq0Twp2psQOPw9lxAdZXFjTzYDEy61N6k3RJoT3wr0SZPSdyRKVlJswjfM8mZ3GQQ00q8Agf888");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (

    <div className="App">
      <div className="app">
      <Router>
      <Switch>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/signup" >
          <SignUp />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/store">
          <Header />
          <$$$ />
        </Route>
        <Route path="/setups">
          <Header />
          <Setups />
        </Route>
        <Route path="/OnTop">
          <Header />
          <OnTop />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
  </Router>
  </div>
</div>
);
}

export default App;
