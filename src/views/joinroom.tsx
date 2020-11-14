import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import CookieService from "../components/cookieservice"
import CreateTable from "../components/createtable"

const JoinRoomPage = (event: any) => {

  // Variable for the users room input
  const [roomInput, setRoomInput] = useState("");

  // Sets the users cookie to the roomInput
  const handleSubmit = e => {
     CookieService.set(1, roomInput, "test")
     window.location.reload()
  }

  // Checks if the users keypress is the enter key so pressing 'enter' triggers handleSubmit
  const handleKeypress = e => {
      if (e.key === "Enter") {
          handleSubmit(e);
        } 
  }

  // Changes the roomInput variable with the users form input
  const handleChange = e => {
      setRoomInput(e.target.value);
  }

  return (
    <div>
      <Form >

        {/* Form Text Input */}
        <FormGroup>
            <Label for="RoomId">Enter Room ID</Label>
            <Input
                    type="text" 
                    onKeyPress = {handleKeypress}
                    onChange= {handleChange}
                    value = {roomInput}
                    placeholder="Enter Room ID"
            />
        </FormGroup>
        </Form>

        {/* Submit Button */}
        <Button 
          name='button1' 
          variant="primary" 
          onClick={handleSubmit}
          >Submit Data To Cookie
        </Button>{' '}

        {/* Print Cookie to console button */}
        <Button name='button2'
          variant="primary"
          onClick={(e) => console.log("getting Cookie: "+CookieService.get("1"))}
          >Cookie Console.log
        </Button>{' '}
        
      {/* Room Label */}
      <h1> Render Room #{CookieService.get("1")} </h1>

    {/* Calls CreateTable Component */}
    <>
      <CreateTable />
    </>
    </div>
  );
}

export default JoinRoomPage;