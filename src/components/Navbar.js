import React, { Component } from "react";



import Menu from "../components/Menu/Menu";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h2>Rick y Morty</h2>
        <Menu />
      </div>
    );
  }
}

export default Navbar;