import React, { useState } from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Input, Label, } from 'reactstrap';

const SubmitData = (event: any) => {

    // Variable to store user input of the movie title
    const [movieInput, setMovieInput] = useState("");

    // Method to make HTTP requests to backend to create a movie entry
    const handleSubmit = e => {
        axios.post("/movies", {
            "id": "",
            "movieName": movieInput,
            "votes": 0,
            "timeElapsed": "",
            "roomId": "1"
       })
    }

    // Checks if the users keypress is the enter key so pressing 'enter' triggers handleSubmit
    const handleKeypress = e => {
        if (e.key === "Enter") {
            handleSubmit(e);
          } 
    }

    // Changes the movieInput variable with the users form input
    const handleChange = e => {
        setMovieInput(e.target.value);
    }

    return (
    <div>
        <Form >
        <FormGroup>
            <Label for="exampleAddress">Enter a Movie Title</Label>
            <Input
                    type="text" 
                    onKeyPress = {handleKeypress}
                    onChange= {handleChange}
                    value = {movieInput}
                    placeholder="Enter movie"
            />
        </FormGroup>
        </Form>
        <Button name='button1' variant="primary" onClick={handleSubmit} >Submit</Button>{' '}
    </div>
  );
}

export default SubmitData;