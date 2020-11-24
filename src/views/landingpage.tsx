import React, {Component} from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return(
      <div className="App">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

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