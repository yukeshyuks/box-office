import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navs from "./components/Navs"
import Homepage from "./pages/Homepage";
import Starred from "./pages/Starred";


function App() {
  return (
    <div>
      <Navs />
      <Switch>
          <Route exact path="/">
          <Homepage />
          </Route>

          <Route exact path="/starred">
          <Starred />
          </Route>

          <Route>
          Error 404 - page not found!
          </Route>
        </Switch>
    </div>
);
  };

export default App;
