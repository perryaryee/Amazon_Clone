import React, { useEffect, useState } from "react";
import "../Components/App.css";
import Header from "../Components/Header";
import Home from "../Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";
import SingleProduct from "../Pages/SingleProduct";
const App = () => {
  const [{}, dispatch] = useStateValue();
  // creating a lister to keep track of users who hv sign-in

  useEffect(() => {
    // onAuthstateChange adds an observer for login changes to the user sign in state
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the User just loggen in/the user was logged in
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
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/product/:id" exact>
            <SingleProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
