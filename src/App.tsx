import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing page modules from /view directory
import LandingPage from "./views/landingpage"
import SecondPage from "./views/secondpage"
import CreateServerPage from "./views/createserverpage"
import JoinRoomPage from "./views/joinroom"
import HostGameRoom from "./views/hostgameroom"
import GameRoom from "./views/gameroom"
import CreateRoom from "./views/createroom"
import ResultsPage from "./views/resultspage"

/* 
JSON-Server backed startup:
json-server --watch /home/systemsunknown/vote2watch/src/db.json --port 50501
json-server --watch ./src/db.json --port 50501
*/

/*
** ToDo **
Voting results
Limiting voting per user
Flexbox for voting cards
Real landing page
Trash collection
*/

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

            <Route path="/joinroompage">
              <JoinRoomPage />
            </Route>

            <Route path="/hostgameroom">
              <HostGameRoom />
            </Route>

            <Route path="/gameroom">
              <GameRoom />
            </Route>

            <Route path="/createroom">
              <CreateRoom />
            </Route>

            <Route path="/resultspage">
              <ResultsPage />
            </Route>
        
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;