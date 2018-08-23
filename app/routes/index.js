import React from "react";
import Page510 from "./Page510";
import Page418 from "./Page418";

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
  indexRoute: { component: Page510 },
  childRoutes: [
    {
      path: "/about",
      name: "/about",
      component: Page510
    },
    {
      path: "/home",
      name: "/home",
      component: Page418
    },
    {
      path: "*",
      name: "notfound",
      component: Page510
    }
  ]
};
