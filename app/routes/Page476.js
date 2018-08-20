/**
 *
 * Page476
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page476 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ height: "80%", padding: "30px" }}>
          <div style={{ height: "60px" }}>
            <Row>
              <Column col={6}>
                <div
                  style={{ height: "50px", width: "50%", paddingTop: "10px" }}
                >
                  <span style={{ fontSize: "40px", color: "#0dc0c3" }}>
                    I'm candyoo
                  </span>
                </div>
              </Column>
              <Column col={3}>
                <div
                  style={{
                    height: "50px",
                    width: "50%",
                    position: "absolute",
                    right: "0px"
                  }}
                  col={3}
                />
              </Column>
              <Column col={3}>
                <div
                  style={{
                    height: "50px",
                    width: "50%",
                    position: "absolute",
                    right: "0px",
                    paddingTop: "20px"
                  }}
                  col={3}
                >
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)"
                      }}
                    >
                      Work
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    height: "50px",
                    width: "50%",
                    position: "absolute",
                    paddingTop: "20px",
                    left: "0px"
                  }}
                  col={3}
                >
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        position: "absolute",
                        transform: "translateX(-50%)",
                        right: "0px"
                      }}
                    >
                      About
                    </span>
                  </div>
                </div>
              </Column>
            </Row>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page476;
