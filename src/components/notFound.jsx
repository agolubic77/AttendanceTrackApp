import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <br />
      <Link className="btn btn-primary" to="/players">
        Početna
      </Link>
    </div>
  );
};

export default NotFound;
