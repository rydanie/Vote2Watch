import React from 'react';
import { Container, Button } from 'reactstrap';

const Example = (props: any) => {
  return (

    <Container style={{flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      }}>

  
    
    <div text-align="center"> 
      <div text-align="center">
        <a href="createserverpage">
          <Button size="lg" color="primary">Create A Room</Button>
        </a>
      </div>

      <div>
        <a href="joinroompage">
          <Button  size="lg" color="primary">Join A Room</Button>
        </a>
      </div>
    </div>

    <a href="secondpage"> go to test page</a>
    <a href="createserverpage">Create a Room</a>
    <a href="joinroompage">Join Room Page</a>

    </Container>
  );
}

export default Example;