import React, { Component } from "react";
import Logo from "../assets/logo.png"



import Menu from "../components/Menu/Menu";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        
        <img src={Logo} style={{height: "4rem", width:"10rem"}}/>
        
        
        <Menu />
      </div>
    );
  }
}

export default Navbar;