import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import CoursePage from "./CoursePage";
import PageNotFound from "./PageNotFound";
import Maitenance from './errors/maintenance';
import Error500 from './errors/error500'
import Error404 from './errors/error404'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route path="/CoursePage" component={CoursePage} />
        <Route path="/Maintenance" component={Maitenance} />
        <Route path="/Error404" component={Error404} />
        <Route path="/Error500" component={Error500} />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
