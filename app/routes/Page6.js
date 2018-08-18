/**
 *
 * Page6
 *
 */

import React, { Component } from "react";

class Page6 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ height: "100px" }}>
          <h3 style={{ textAlign: "center", height: "100%", padding: "30px" }}>
            <span
              style={{ color: "#24d8d0", fontSize: "50px", fontWeight: 100 }}
            >
              I'm candyoo
            </span>
          </h3>
        </div>

        <div style={{ height: "50px", fontSize: "16px", position: "relative" }}>
          <div
            style={{
              backgroundColor: "#e45353",
              position: "absolute",
              right: "14px",
              top: "12px"
            }}
          >
            <h1 style={{ display: "inline-block" }}><span>About</span></h1>
            <h2 style={{ display: "inline-block", marginLeft: "18px" }}>
              <span style={{ fontSize: "16px" }}>Work</span>
            </h2>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-block",
              justifyContent: "center",
              height: "300px",
              alignItems: "center",
              backgroundColor: "#fcecd7",
              borderRadius: "4px",
              width: "46%",
              marginLeft: "2%"
            }}
          >
            <span>Empty div</span>
          </div>
          <div
            style={{
              display: "inline-block",
              justifyContent: "center",
              height: "300px",
              alignItems: "center",
              backgroundColor: "#fcecd7",
              borderRadius: "4px",
              width: "46%",
              marginLeft: "2%"
            }}
          >
            <span>Empty div</span>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page6;
