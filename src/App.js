import React from "react";
import { Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/">
          <Homepage />
          </Route>

          <Route exact path="/starred">
          <Starred />
          </Route>

          <Route exact path="/show/:id">
            <Show />
          </Route>

          <Route>
          Error 404 - page not found!
          </Route>
        </Switch>
    </div>
);
  };

export default App;
