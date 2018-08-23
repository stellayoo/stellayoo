/**
 *
 * Page510
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page510 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div
          style={{
            height: "800px",
            padding: "30px",
            backgroundColor: "#ffffff"
          }}
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
          <div style={{ height: "60px", marginTop: "160px" }}>
            <Row>
              <Column col={2} /><Column col={8}>
                <div style={{ height: "80px", fontFamily: "Roboto" }}>
                  <span style={{ fontSize: "40px", fontFamily: "Noto Sans" }}>
                    HI, I'm Korean UX Designer Stella Youn Kyung Yoo.
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "22px",
                      fontStyle: "normal",
                      letterSpacing: "1px",
                      whiteSpace: "pre",
                      wordSpacing: "4px",
                      lineHeight: "30px",
                      fontWeight: 300
                    }}
                  >
                    <span>
                      {" "}
                      나는 끊임없이 변화하는 디지털 사회의 흐름을 UX적인 관점으로 바라보고 사용자의 need를 파악하여 브랜딩합니다.
                      그리고 나의 색깔과 가치를 조형의 기본 단위인 '점'으로 정의합니다.
                      점은 방향이나 면적등은 갖고 있지않지만 점의 개수, 위치, 밝기, 크기, 그리는 재료, 다른 점들과의 관계 등에 따라
                      독특한 느낌을 전달 할 수 있으며, 새로운 형태나 움직임, 공간감을 나타냅니다.
                      나는 나의 가치를 증명할 때 점의 특성을 모토로 삼아 기본기에 충실하면서 이미 산출된 것들에 의존하지않고
                      다양한 시각에서 크리에이티브와 편의성을 결합시켜 도출한 결과물로 출발합니다.
                      또한 각기다른 성향을 가진 조직간의 협업을 통해 상호를 존중하며, 나의 색깔과 가치를 확산시킵니다.
                      이러한 이해와 경험을 바탕으로 나는 디자이너로써 성장할 것을 확신합니다.
                    </span>
                  </p>
                </div>
              </Column><Column col={2} />
            </Row>
            <div style={{ height: "60px", marginTop: "28px" }}>
              <Row>
                <Column col={2} />
                <Column col={8}>
                  <Row>
                    <Column col={4}>
                      <div style={{ height: "30px", width: "34%" }}>
                        <span>
                          <a href="https://www.candyoo.com/">
                            <span
                              style={{ fontSize: "24px", color: "#999999" }}
                            >
                              Website
                            </span>
                          </a>
                        </span>
                        <span style={{ margin: "40px" }}>
                          <a href="https://www.behance.net/stella_yoo">
                            <span
                              style={{ fontSize: "24px", color: "#999999" }}
                            >
                              Behance
                            </span>
                          </a>
                        </span>
                      </div>
                    </Column>
                  </Row>
                </Column>
                <Column col={2} />
              </Row>
            </div>
          </div>
        </div>

        <div style={{ padding: "30px", backgroundColor: "#ffffff" }}>
          <img
            src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/18527728_1354309257985572_3692717692135311726_n.jpg?_nc_cat=0&oh=2741a6bffe6b14acd0c00d42a6258e40&oe=5BFA541D"
            style={{ width: "100%" }}
          />
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page510;
