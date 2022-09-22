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
                <li>
                  <NavLink to="/profile">Personajes</NavLink>
                </li>
                <li>Bienvenido/a: {context.state.username}</li>
                <li onClick={context.logout}>Logout</li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )
          }
        </AuthContext.Consumer>
      </ul>
    </>
  );
};

export default Menu;