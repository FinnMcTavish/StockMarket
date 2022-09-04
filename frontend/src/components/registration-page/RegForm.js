import React from "react";
import "./RegForm.css";
// import picus from '../'
function RegForm() {
  return (
    <div>
      <center>
        <form>
          <div className="regform">
            <h2>Registration</h2>
            <div className="inp">
              <div className="inp2">
                <input type="text" placeholder="Username" required></input>
                {/* <img src='{picus}'></img> */}
              </div>

              <input type="text" placeholder="Password" required></input>
            </div>

            <div>
              <button type="submit" className="but-sub">
                Submit
              </button>
            </div>
          </div>
        </form>
      </center>
    </div>
  );
}

export default RegForm;
