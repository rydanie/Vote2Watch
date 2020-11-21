import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// TO REMOVE - TESTING
import SecondPage from "./views/secondpage"
import CreateServerPage from "./views/createserverpage"

// Importing page modules from /view directory
import LandingPage from "./views/landingpage"
import CreateRoomPage from "./views/createroompage"
import JoinRoomPage from "./views/joinroom"
import HostGameRoom from "./views/hostgameroom"
import GameRoom from "./views/gameroom"

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

            <Route path="/createroomPage">
              <CreateRoomPage />
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

            {/* To Remove */}
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