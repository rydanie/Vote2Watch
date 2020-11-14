import React, { useState } from 'react';
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import CookieService from "../components/cookieservice"
import CreateTable from "../components/createtable"

const Example = (event: any) => {

  const [value, setValue] = useState("");

  const handleSubmit = e => {
     console.log("room id: "+value)
     CookieService.set(1, value, "test")
     window.location.reload()
  }

  const handleKeypress = e => {
      if (e.key === "Enter") {
          handleSubmit(e);
        } 
  }

  const handleChange = e => {
      setValue(e.target.value);
  }

// Entering Room #1
  if(CookieService.get("1") === "1"){
    return (
      <div>
        <Form >
          <FormGroup>
              <Label for="exampleAddress">Enter Room ID</Label>
              <Input
                      type="text" 
                      onKeyPress = {handleKeypress}
                      onChange= {handleChange}
                      value = {value}
                      placeholder="Enter Room ID"
              />
          </FormGroup>
          </Form>
          <Button name='button1' variant="primary" onClick={handleSubmit} >Submit Data To Cookie</Button>{' '}
          <Button name='button1' variant="primary" onClick={(e) => console.log("getting Cookie: "+CookieService.get("1"))} >Cookie Console.log</Button>{' '}
      
        <h1> Render Room #1 </h1>
      <>
        <CreateTable />
      </>
      </div>
    );
}

// Entering Room #2
if(CookieService.get("1") === "2"){
return(
  <div>
    <Form >
      <FormGroup>
          <Label for="exampleAddress">Enter Room ID</Label>
          <Input
                  type="text" 
                  onKeyPress = {handleKeypress}
                  onChange= {handleChange}
                  value = {value}
                  placeholder="Enter Room ID"
          />
      </FormGroup>
      </Form>
      <Button name='button1' variant="primary" onClick={handleSubmit} >Submit Data To Cookie</Button>{' '}
      <Button name='button1' variant="primary" onClick={(e) => console.log("getting Cookie: "+CookieService.get("1"))} >Cookie Console.log</Button>{' '}
      
  <h1> Render Room #2 </h1>
  <>
    <CreateTable />
  </>
    </div>
    
  );
}

// Entering Unknown Room
else{
  return(
    <div>
    <Form >
      <FormGroup>
          <Label for="exampleAddress">Enter Room ID</Label>
          <Input
                  type="text" 
                  onKeyPress = {handleKeypress}
                  onChange= {handleChange}
                  value = {value}
                  placeholder="Enter Room ID"
          />
      </FormGroup>
      </Form>
      <Button name='button1' variant="primary" onClick={handleSubmit} >Submit Data To Cookie</Button>{' '}
      <Button name='button1' variant="primary" onClick={(e) => console.log("getting Cookie: "+CookieService.get("1"))} >Cookie Console.log</Button>{' '}
      
    <h1> Not Found </h1>
    </div>
  );
}
}

export default Example;