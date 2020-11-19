import React from 'react';
import { Button } from 'reactstrap';
import SubmitData from "../components/submitdata"
import CookieService from "../components/cookieservice"

const Example = (props: any) => {
  return (
    <div>
        <h1>Round #1</h1>
        <h1>Room ID: {CookieService.get("RoomID")}</h1>
        <a href="landingpage"> go to the main page</a>

        <div>
            <a href="/round2" >
                <Button color="primary">Round #2</Button>{' '}
            </a>
        </div>

        <SubmitData />

    </div>
  );
}


export default Example;