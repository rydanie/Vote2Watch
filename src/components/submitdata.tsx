import React, { useState } from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Input, Label, } from 'reactstrap';

const Example = (event: any) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        axios.post("/posts", {
            "id": "",
            "ticker": value,
            "stockPrice": "",
            "timeElapsed": ""
       })
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
        <Form >
        <FormGroup>
            <Label for="exampleAddress">Enter a Movie Title</Label>
            
            <Input
                    type="text" 
                    onKeyPress = {handleKeypress}
                    onChange= {handleChange}
                    value = {value}
                    placeholder="Enter movie"
            />
        </FormGroup>
        </Form>
        <Button name='button1' variant="primary" onClick={handleSubmit} >Submit</Button>{' '}
    </div>
  );
}

export default Example;