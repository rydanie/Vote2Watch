import React from 'react';
import "./views/main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Import page modules
import LandingPage from "./views/landingpage"
import CreateRoomPage from "./views/createroompage"
import JoinRoomPage from "./views/joinroom"
import HostGameRoom from "./views/hostgameroom"
import GameRoom from "./views/gameroom"

/* 
** BACKEND STARTUP **
json-server --watch ./src/db.json --port 50501 --host 127.0.0.1
*/

function App() {
  return (
    <div>
      <Router>
        <div>
          <br />
        <a href="/" style={{margin: "3%"}}> <b style={{fontSize: 25}}>Home </b> </a>
        
          <Switch>

            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/landingpage">
              <LandingPage />
            </Route>

            <Route path="/createroompage">
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
        
          </Switch>
        </div>
      </Router>
    </div>
  );

}

export default App;