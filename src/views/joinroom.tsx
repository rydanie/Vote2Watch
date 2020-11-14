import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import cookie from "react-cookie";

const Example = (event: any) => {

  const [value, setValue] = useState("");

  const handleSubmit = e => {
     console.log("room id: "+value)
  }

  const handleKeypress = e => {
      if (e.key === "Enter") {
          handleSubmit(e);
        } 
  }

  const handleChange = e => {
      setValue(e.target.value);
  }

return (
  

  <div>
    <div>
        <h1>Join Room Page</h1>
        <a href="landingpage"> go to the main page</a>
    </div>
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
      <Button name='button1' variant="primary" onClick={handleSubmit} >Submit</Button>{' '}
  </div>
);
}

export default Example;