
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import AuthProvider from "./components/Auth/AuthProvider";
import Navbar from "./components/Navbar";
import Home from "./components/Menu/Home";
import Profile from "./components/Menu/Profile";
import Login from "./components/Menu/Login";
import Detail from "./components/Menu/Detail"
import "./App.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Profile/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/" exact element={<Home/>} />
            <Route render={() => <h1>Error 404</h1>} />
          </Routes>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
