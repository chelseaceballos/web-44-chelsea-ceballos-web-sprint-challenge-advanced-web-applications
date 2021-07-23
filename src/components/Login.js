import React, { useState } from "react";
import axios from 'axios';
import { useHistory} from 'react-router'


const initialValues = {
  username: '',
  password: ''
};
// username: 'Lambda', password: 'School' }

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formValues, setFormValues] = useState(initialValues);
  const {push} = useHistory();

  const error = "";
  // replace with error state


  const handleChanges = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
};

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', formValues )
    .then((res) => {
        window.localStorage.setItem('token', res.data.payload);
        push("/colors");
    })
    .catch((err) => console.log(err.message));
};

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login Here!</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="username">Username:</label>
                <input 
                id="username" 
                name="username"
                value={formValues.username} 
                onChange={handleChanges}/>

                <label htmlFor="password">Password:</label>
                <input 
                id="password" 
                name="password"
                type='password'
                value={formValues.password} 
                onChange={handleChanges}/>

                <button className="loginBtn">Login</button>
            </form>
        
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"