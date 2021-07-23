import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const initialValues = {
  username: '',
  password: ''
}
// username: 'Lambda', password: 'School'


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState();
  const { push } = useHistory();
 
  const handleChange = e => {setFormValues({...formValues,[e.target.name]: e.target.value});};

  const handelSubmit = e => {
    e.preventDefault();
    if (formValues.username !== 'Lambda' || formValues.password !== 'School') {
      setError('Login Failed :( ')
    }


    axiosWithAuth()
      .post('/api/login', formValues)
      .then((res) => {
        // console.log("login resp:", res)
        localStorage.setItem('token', res.data.payload)
        push('/bubblepage')
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <div>
        <form onSubmit={handelSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            data-testid="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />

          <label style={{marginLeft: "15px"}} htmlFor="password">Password:</label>
          <input
            id="password"
            data-testid="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          /><br/>

          <button>Login</button>

        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;
