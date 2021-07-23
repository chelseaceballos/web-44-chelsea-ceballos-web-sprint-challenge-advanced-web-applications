import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.scss";

import axiosWithAuth from './helpers/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';

import Login from "./components/Login";
import BubblePage from './components/BubblePage'


function App() {
  const logout = () => {
    axiosWithAuth()
    .post('/logout')
    .then(res => {
      localStorage.removeItem('token');
      localStorage.setItem('username');
      localStorage.setItem('role');
      window.location.href = "/login";
    })
    .catch(err => {
      console.log(err);
    })
  };


  return (
    <Router>
      <div className="App">

        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="/">logout</a>
        </header> 

      <Switch>

      <PrivateRoute path="/colors">
            <BubblePage />
          </PrivateRoute>

        <Route exact path="/"> 
        <Login />
        </Route>

        <Route> 
        <Login />
        </Route>
      </Switch>

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.