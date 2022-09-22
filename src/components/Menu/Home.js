import React from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";

const Home = () => {
  return (
    <>
      <AuthContext.Consumer>
        {(context) =>
          !context.state.isAuthenticated ? (
            <>
              <h3>Logeate para ver los personajes de Rick y Morty</h3>
            </>
          ) : (
            <>
              <Navigate to="/profile" />
            </>
          )
        }
      </AuthContext.Consumer>
    </>
  );
};

export default Home;
