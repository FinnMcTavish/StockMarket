import React from "react";
import "./howtoplaystyle.css";

class HowtoPlay extends React.Component {
  render() {
    let h = window.screen.availHeight;
    let w = window.screen.availWidth;
    const mystyle = {
      minHeight: h - 150,
      maxWidth: w,
    };
    return (
      <div className="bodys">
        <div className="cards-list" style={mystyle}>
          <center>
            <h1 className="howtoplay">How to Play</h1>
          </center>
          <div className="card">
            <div className="card_title title-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos voluptates nesciunt officiis? Laborum nostrum nam
                delectus ullam. Sapiente et quae, cupiditate illo nesciunt
                numquam voluptatum possimus natus voluptatibus voluptate ab?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat sit non qui ipsam earum beatae consequuntur voluptatum
                id blanditiis dolorum, excepturi quas aut illo ullam deleniti,
                tempora voluptatem deserunt nemo! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sequi minus inventore, officiis
                corporis impedit aut quaerat autem doloribus culpa laboriosam,
                quos quam ipsum nobis a perspiciatis quasi aspernatur
                necessitatibus recusandae. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Provident et ut repellat, totam
                distinctio laudantium nam tempora optio.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowtoPlay;
