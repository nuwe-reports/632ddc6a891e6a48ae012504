import React from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";


const Menu = () => {
  return (
    <>
      <ul>
        <AuthContext.Consumer>
          {(context) =>
            context.state.isAuthenticated ? (
              <>
              <li style={{ fontStyle: "italic"}}>Bienvenido/a: {context.state.username}</li>
                <li>
                  <NavLink to="/profile" style={{color: "#fff", textDecoration: "none"}}>Personajes</NavLink>
                </li>
                
                <li onClick={context.logout}>Logout</li>
              </>
            ) : (
              <li>
                <NavLink to="/login" style={{color: "#fff", textDecoration: "none"}}>Login</NavLink>
              </li>
            )
          }
        </AuthContext.Consumer>
      </ul>
    </>
  );
};

export default Menu;