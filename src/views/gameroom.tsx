import React from 'react';
import CreateTable from '../components/createtable'
import CookieService from '../components/cookieservice';
import Database from "../db.json";


const GameRoom = (props: any) => {
  let userRoomID = CookieService.get("RoomID");
  let i=0
  console.log("length: "+Database.rooms.length);
  while (Database.rooms[i]?.name != userRoomID && i<Database.rooms.length) {
    console.log("i="+Database.rooms[i]?.name)
    i++
  }
  console.log("final: "+Database.rooms[i]?.name)

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