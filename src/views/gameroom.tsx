import React from 'react';
import { Button } from 'reactstrap';
import CreateTable from '../components/createtable'
import CookieService from '../components/cookieservice';

const GameRoom = (props: any) => {
  return (
    <div>
      
        {/* Room Label */}
        <h1> Game Room #{CookieService.get("RoomID")} </h1>

        <div>
            <CreateTable />
        </div>

    </div>
  );
}


export default GameRoom;