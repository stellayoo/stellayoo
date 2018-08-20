import React from "react";
import Page476 from "./Page476";
import Page6 from "./Page6";
import Page17 from "./Page17";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: Page476 },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: Page476
    },
    {
      path: "/work",
      name: "/work",
      component: Page6
    },
    {
      path: "/about",
      name: "/about",
      component: Page17
    },
    {
      path: "*",
      name: "notfound",
      component: Page476
    }
  ]
};
