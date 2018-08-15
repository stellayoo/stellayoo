/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{}}>
          <h1 style={{ color: "#62c9c5", fontSize: "40px" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100px",
                  alignItems: "center",
                  borderRadius: "4px"
                }}
              />
            </div>
            <span style={{ fontSize: "100px" }}>I'm Candyoo</span>
          </h1>
          <p>
            <span
              style={{ fontWeight: 400, fontSize: "30px", color: "#666666" }}
            >
              유윤경 stelllayoo
            </span>
          </p>
          <p><span>UX디자인을 하고 있습니다.</span></p>
          <img
            src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/18527728_1354309257985572_3692717692135311726_n.jpg?_nc_cat=0&oh=2741a6bffe6b14acd0c00d42a6258e40&oe=5BFA541D"
            style={{ width: "300" }}
          />
          <a href="https://www.facebook.com/stellayoo24">
            <span>https://www.facebook.com/stellayoo24</span>
          </a>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
