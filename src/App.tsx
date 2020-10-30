import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Import page modules from /view directory
import LandingPage from "./views/landingpage"
import SecondPage from "./views/secondpage"
import CreateServerPage from "./views/createserverpage"


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>

            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/landingpage">
              <LandingPage />
            </Route>

            <Route path="/secondpage">
              <SecondPage />
            </Route>

            <Route path="/createserverpage">
              <CreateServerPage />
            </Route>

          
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;