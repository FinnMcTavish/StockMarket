import React from "react";
import "./Square.css";
function Square(props) {
  const name = props.title;
  return (
    <div
      className="square"
      onClick={(event) => (window.location.href = "/dashboard")}
    >
      <center>
        <a href="#">
          <h2>{name}</h2>
        </a>
      </center>
    </div>
  );
}

export default Square;
