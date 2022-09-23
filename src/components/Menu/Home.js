import React from "react";
import { Navigate, Link } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";

const Home = () => {
  return (
    <>
      <AuthContext.Consumer>
        {(context) =>
          !context.state.isAuthenticated ? (
            <>
            <div className="container">
              <div className="card">
              <Link to="/login"><h3>Logeate para ver los personajes de Rick y Morty</h3></Link>
              </div>
            
            </div>
              
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
