import React, {Component} from 'react';
import { Button } from 'reactstrap';
import logo from "./Vote2WatchLogo1.png"

class App extends Component {
  render() {
    return(
      <div className="App">
        <img src={logo} alt="Vote2Watch Logo" style={{width: '80%', maxWidth: 500}}/>
        <br /><br /><br /><br />

        <a href="createroompage">
          <Button color="primary" active={true} size="lg">Create a Room</Button>
        </a>

        <br /><br />

        <a href="joinroompage">
          <Button color="secondary" active={true} size="lg">Join a Room</Button>
        </a>

        <br /><br /><br /><br />
      
        <div style={{display: 'table', margin: '0px auto', maxWidth: 700, width: '80%'}}>
          <p style={{textAlign: 'center', fontSize: 22}}>
            Vote2Watch is web application for voting and selecting a movie
            for a group of people to watch. Users can submit movie titles 
            for the group to vote or veto on. The web application ends with 
            the results of the best movie to watch.
          </p>
        </div>
        
      </div>
    )
  }

}

export default App;