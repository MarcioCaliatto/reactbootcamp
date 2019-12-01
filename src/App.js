import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
