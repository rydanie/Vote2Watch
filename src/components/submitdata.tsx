import React, { useState } from 'react';
import Axios from "axios";
import { Button, Form, FormGroup, Input, Label, } from 'reactstrap';
import CookieService from './cookieservice';

const SubmitData = (event: any) => {

    const [movieInput, setMovieInput] = useState("");
    const [roomID, setRoomID] = useState("");

    // Method to make HTTP requests to backend to create a movie entry
    const handleSubmit = e => {
        Axios.post("/movies", {
            "id": "",
            "movieName": movieInput,
            "votes": 0,
            "movieRoomID": roomID
       })
    }

    // Changes the movieInput variable with the users form input
    const handleChange = (e: any) => {
        setRoomID(CookieService.get("RoomID"));
        setMovieInput(e.target.value);
    }

    // Checks if the users keypress is the enter key so pressing 'enter' triggers handleSubmit
    const handleKeypress = (e: any) => {
        if (e.key === "Enter") {
            handleSubmit(e);
          } 
    }

    return (
    <div>
        <Form >
        <FormGroup>
            <Label>Enter a Movie Title</Label>
            <Input
                    type="text" 
                    onKeyPress = {handleKeypress}
                    onChange= {handleChange}
                    value = {movieInput}
                    placeholder="Enter a Movie"
            />
        </FormGroup>
        </Form>
        <Button name='button1' variant="primary" onClick={handleSubmit} >Submit</Button>{' '}
    </div>
  );
}

export default SubmitData;