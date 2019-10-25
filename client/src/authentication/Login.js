import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';


function Login(props)  {
  const [user, setUser] = useState({
      username: '',
      password: ''
  });

  const handleChange = e => {
      setUser({ 
        ...user, [e.target.name]: e.target.value,
      });
      e.target.focus()
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      props.logIn(user, props.history); 

      setUser({           
          username: '',
          password: ''
      })
  };

  if (props.state.authenticationReducer.user.authenticated) {
    return <Redirect to='/' />
  } else {
      return (
        <div>
          <form onSubmit={handleSubmit} method="POST">
            <fieldset>
                <label htmlFor="email">Email</label>
                <input
                    style={{ marginBottom: "15px" }}
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={user.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    style={{ marginBottom: "15px" }}
                    className="input-class"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                />
                <button
                    type="submit"
                >
                    Sign in
                </button>
              </fieldset>
          </form>
        </div>
      )
    }
}

export default Login;