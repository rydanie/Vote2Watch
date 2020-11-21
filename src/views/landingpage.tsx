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











/*const Example = (props: any) => {
  return (




    
    <Container style={{flex:1,
      width: 500px;
      margin: auto;
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      }}>


<>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <Button variant="primary" size="lg" color='primary' block>
    Create a Room
  </Button>
  <Button variant="secondary" size="lg" block>
    Join a Room
  </Button>
</>
     
      <div text-align="center">
        <a href="createserverpage">
          <Button size="lg" color="primary">Create A Room</Button>
        </a>
      </div>

      <div text-align="center">
        <a href="joinroompage">
          <Button  size="lg" color="primary">Join A Room</Button>

        </a>
      
    </div>

    <a href="secondpage"> go to test page</a>
    <a href="createserverpage">Create a Room</a>
    <a href="joinroompage">Join Room Page</a>

    </Container>
  );
}


export default Example;*/