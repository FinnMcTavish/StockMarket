import React from "react";
import NavBar from "../profilePage/NavBar/NavBar";
import RegForm from "./RegForm";
import "./Registration.css";
import Sample_reg from "./Sample_reg";
import Sample_login from "./Sample_login";

function Registration() {
  return (
    <div>
      <NavBar />
      {/* <RegForm /> */}
      {/* <Sample_reg /> */}

      <Sample_login />
    </div>
  );
}

export default Registration;
