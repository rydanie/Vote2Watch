import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


const Example = (props: any) => {
  return (
    
    /*
    <Container>
      <Row>
        <Col> </Col>
      </Row>
      <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
    </Container>
    
   <Button outline color="primary">primary</Button>{' '}
    <div> 
      <Container className="themed-container">one</Container>
      <Container className="themed-container" fluid="sm">two</Container>
      <Container className="themed-container" fluid="md">three</Container>
    </div>*/
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

    </Container>
  );
}
/*
const Example = (props: any) => {
  return (
    <div>
      <h1>Welcome to Vote2Watch</h1>
          <a href="secondpage"> go to test page</a>

      
    </div>
  );
}*/

export default Example;