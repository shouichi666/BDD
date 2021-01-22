import React from "react";
import { HashRouter, Route } from "react-router-dom";
import InputContents from "./components/InputContents";
import Random from "./components/Random";
import Favorite from "./components/Favorite";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <HashRouter>
        {/* <Switch> */}
        <Route path="/">
          <InputContents />
        </Route>

        <Route path="/random">
          <Random />
        </Route>

        <Route path="/favorite">
          <Favorite />
        </Route>

        <Nav />
        {/* </Switch> */}
      </HashRouter>
    </div>
  );
};

export default App;
