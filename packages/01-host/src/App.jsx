import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li style={{ display: "block" }}>
            <Link to="/">Host / App #1</Link>
          </li>
          <li style={{ display: "block" }}>
            <Link to="/page1">Page 1 / App #2</Link>
          </li>
          <li style={{ display: "block" }}>
            <Link to="/page2">Page 2 / App #3</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        <Route path="/">
          This is the container from the host app
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
