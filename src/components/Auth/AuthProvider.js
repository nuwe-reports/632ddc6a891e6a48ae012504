import React, { Component } from "react";

import AuthContext from "./AuthContext";
class AuthProvider extends Component {
  state = {
    isAuthenticated: false,
    username: null,
    password: null
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          state: this.state,
          logout: () =>
            this.setState({
              isAuthenticated: false,
              username: null,
              password: null,
              error: null
            }),
          login: () => {
            // console.log('submit')
            if (
              this.state.username.length >= 1 &&
              this.state.password.length >= 1
            ) {
              // console.log('login correct')
              this.setState({
                isAuthenticated: true
              });
            } else {
              // console.log("login not correct");
              let msg = (
                <span style={{ color: "red" }}>Login details incorrect</span>
              );
              this.setState({
                error: msg
              });
            }
          },
          userChange: e => {
            this.setState({
              username: e.target.value
            });
          },
          passwordChange: e => {
            this.setState({
              password: e.target.value
            });
          }
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthProvider;