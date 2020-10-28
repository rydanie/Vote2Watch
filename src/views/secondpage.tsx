import React from 'react';
import { Button } from 'reactstrap';

const Example = (props: any) => {
  return (
    <div>
      <h1>Welcome to the second page</h1>
        <a href="landingpage"> go to the main page</a>

        <div>
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>
        </div>

    </div>
  );
}


export default Example;