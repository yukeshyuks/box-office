import React from "react";
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Homepage from "./pages/Homepage";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};


function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
);
  };

export default App;
