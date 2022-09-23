import React from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";


const Login = () => {
  return (
    <div className="container">
      
      <AuthContext.Consumer>
        {(change) =>
          change.state.isAuthenticated ? (
            <Navigate to="/profile" />
          ) : (
            
            <div className="box">
              <h3>Logeate para ver los personajes</h3>
              {change.state.error}
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                onChange={change.userChange}
                className="login-input"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                onChange={change.passwordChange}
                className="login-input"
              />
              <button
                type="submit"
                disabled={!change.state.username || !change.state.password}
                onClick={change.login}
                className="login-button"
              >
                Login
              </button>
            </div>
          )
        }
      </AuthContext.Consumer>
    </div>
  );
};

export default Login;