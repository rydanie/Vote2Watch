import React from 'react';
import { Button, Form, Input } from 'reactstrap';

const Example = (props: any) => {
  return (
    <div>
      <h1>Create Server Page</h1>
        <a href="landingpage"> go to the main page</a>
        <Form>
            <Input 
                placeholder="Input Movie Title"
                name="movie"
                bsSize="lg"
                onSubmit={handleChange}
            />
        </Form>
    </div>
  );
}

function handleChange(this: any) {
    
    this.preventDefault();
    console.log(this.state.movie);
}

export default Example;