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
      <Button  size="lg" color="primary">test button</Button>
      <Button  size="lg" color="primary">test button2</Button>
      <div text-align="center">
        <Button  size="lg" color="primary">test button3</Button>
      </div>
      <div>
        <Button  size="lg" color="primary">test button3</Button>
      </div>
    </div>

    <a href="secondpage"> go to test page</a>
    <a href="createserverpage">Create a Room</a>
    <a href="joinroompage">Join Room Page</a>

    </Container>
  );
}

export default Example;