/**
 *
 * Page418
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page418 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div
          style={{ height: "180", padding: "30px", backgroundColor: "#ffffff" }}
        >
          <div style={{ height: "80px" }}>
            <Row>
              <Column col={2} />
              <Column col={8}>
                <div
                  style={{ height: "50px", width: "50%", paddingTop: "10px" }}
                >
                  <span
                    style={{
                      fontSize: "40px",
                      color: "#0dc0c3",
                      fontFamily: "Noto sans",
                      fontStyle: "normal",
                      fontWeight: 300
                    }}
                  >
                    I'M CANDYOO
                  </span>
                </div>
              </Column>
              <Column col={2} />
            </Row>
          </div>
          <div style={{ height: "60px" }}>
            <Row>
              <Column col={2} />
              <Column col={8}>
                <Row>
                  <Column col={4}>
                    <div style={{ height: "30px", width: "34%" }}>
                      <span style={{ fontSize: "24px", color: "#222222" }}>
                        ABOUT
                      </span>
                      <span
                        style={{
                          fontSize: "24px",
                          margin: "40px",
                          color: "#222222"
                        }}
                      >
                        PROJECT
                      </span>
                    </div>
                  </Column>
                </Row>
              </Column>
              <Column col={2} />
            </Row>
          </div>
        </div>

        <div style={{ padding: "30px", backgroundColor: "#ffffff" }}>
          <div style={{ height: "600px", backgroundColor: "#e1e1e1" }}>
            <img
              src="/Users/yoo/Desktop/yoo/img"
              style={{ width: "100%", height: "600px" }}
            />
          </div>
          <div
            style={{
              height: "600px",
              marginTop: "20px",
              backgroundColor: "#e1e1e1"
            }}
          >
            <img
              src="http://lorempixel.com/600/337/nature/"
              style={{ width: "100%", height: "600px" }}
            />
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page418;
