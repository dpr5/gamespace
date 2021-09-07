import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage(props) {
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        <div>404 ERROR!!</div>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}
export default NotFoundPage;
