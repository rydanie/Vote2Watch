import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import CookieService from "../components/cookieservice"
import { useHistory } from "react-router-dom";


const JoinRoomPage = (event: any) => {

  let history = useHistory()

  // Variable for storing the users room input
  const [roomInput, setRoomInput] = useState("");

  // Sets the users cookie to the roomInput
  const handleSubmit = e => {
     CookieService.set("RoomID", roomInput, { path: '/' } )
     history.push("/gameroom")
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
                    rules={{ required: true }}
            />
        </FormGroup>
        </Form>

        {/* Submit Button */}
        <Button 
          name='button1' 
          variant="primary" 
          onClick={handleSubmit}
          >Join Room
        </Button>{' '}
       
        
    </div>
  );
}

export default JoinRoomPage;