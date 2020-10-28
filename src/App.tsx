import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Import page modules from /view directory
import LandingPage from "./views/landingpage"
import SecondPage from "./views/secondpage"

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
          
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;