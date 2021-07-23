import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./styles.scss";

import PrivateRoute from './components/PrivateRoute';

import Login from "./components/Login";
import BubblePage from './components/BubblePage'


function App() {
  const logout = () => {  
      localStorage.removeItem('token');
      window.location.href = "http://localhost:3000/";
  };


  return (
    <Router>
      <div className="App">

        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="http://localhost:3000/">logout</a>
        </header> 

      

      <PrivateRoute path="/bubblepage" component={BubblePage}/>
         
      
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/" component={Login} /> 

        
      

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.