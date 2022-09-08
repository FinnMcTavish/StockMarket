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
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                
                <input type="text" placeholder="Age"></input>
                {/* <img src='{picus}'></img> */}
              </div>

              <input type="text" placeholder="Password" required></input>
              <input type="text" placeholder="Confirm Password" required></input>
            </div>
            <input type="radio" value="male" class="rad"></input>
                <label for="male">MALE</label>
                <input type="radio" value="female" class="rad"></input>
                <label for="femalemale">FEMALE</label>

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
