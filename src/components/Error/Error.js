import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="error-page">
        <div className="background-img">
          <div className="space"></div>
          <div className="wrapper">
            <div className="img-wrapper">
              <span className="span-error">44</span>
            </div>
            <p className="text-error">
              The page you are trying to search has been moved to another
              universe.
            </p>
            <Link to="profile">
              <button type="button" className="button-error">
                GET ME HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Error;
