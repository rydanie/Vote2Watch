import React, {Component} from 'react';
import { Button } from 'reactstrap';
import logo from "./Vote2WatchLogo1.png"

class App extends Component {
  render() {
    return(
      <div className="App">
        <img src={logo} alt="Vote2Watch Logo" style={{width: '80%', maxWidth: 500}}/>
        <br /><br /><br /><br /><br /><br /><br /><br />

        <a href="createroompage">
          <Button color="primary" active={true} size="lg">Create a Room</Button>
        </a>

        <br /><br />

        <a href="joinroompage">
          <Button color="secondary" active={true} size="lg">Join a Room</Button>
        </a>
        
      </div>
    )
  }

}

export default App;