/**
 *
 * Page17
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page17 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ height: "3000px", padding: "30px" }}>
          <div style={{ height: "50px", backgroundColor: "#ffffff" }}>
            <Row>
              <Column col={6}>
                <div
                  style={{
                    backgroundColor: "#948585",
                    height: "50px",
                    width: "50%"
                  }}
                />
              </Column>
              <Column col={3}>
                <div
                  style={{
                    height: "50px",
                    backgroundColor: "#9f5d5d",
                    width: "50%"
                  }}
                  col={3}
                />
              </Column>
              <Column col={3}>
                <div
                  style={{
                    backgroundColor: "#826161",
                    height: "50px",
                    width: "50%",
                    position: "absolute",
                    right: "0px"
                  }}
                  col={3}
                />
              </Column>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              <Column col={6}>
                <div style={{ height: "60px", backgroundColor: "#c66969" }} />
              </Column>
              <Column col={6}><div style={{ height: "60px" }} /></Column>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              <Column col={12}>
                <div style={{ height: "400px", backgroundColor: "#e1e1e1" }} />
              </Column>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              <Column col={3}>
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "#e1e1e1",
                    width: "60%"
                  }}
                />
              </Column>
              <Column col={3}><div style={{ height: "30px" }} /></Column>
              <Column col={3} style={{ height: "30px" }}>
                <div style={{ height: "30px", backgroundColor: "#99999" }} />
              </Column>
              <Column col={3}><div style={{ height: "30px" }} /></Column>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              <Column col={3}>
                <div
                  style={{
                    height: "200px",
                    backgroundColor: "#e1e1e1",
                    width: "90%"
                  }}
                />
              </Column>
              <Column col={3}>
                <div
                  style={{
                    height: "400px",
                    backgroundColor: "#999999",
                    width: "90%",
                    position: "absolute",
                    left: "3.3%"
                  }}
                />
              </Column>
              <Column col={3}>
                <div
                  style={{
                    height: "400px",
                    backgroundColor: "#999999",
                    width: "90%",
                    right: "3.3%",
                    position: "absolute"
                  }}
                />
              </Column>
              <Column col={3}>
                <div
                  style={{
                    height: "400px",
                    backgroundColor: "#999999",
                    width: "90%",
                    position: "absolute",
                    right: "0px"
                  }}
                />
              </Column>
            </Row>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page17;
