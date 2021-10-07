import React from "react";
import { Link } from "react-router-dom";

const NotFoundPg = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "30rem",
          margin: "0px",
        }}
      >
        404
      </h1>
      <h2
        style={{
          margin: "0px",
        }}
      >
        page not found
      </h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPg;
