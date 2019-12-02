import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import CoursePage from "./CoursePage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route path="/CoursePage" component={CoursePage} />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
