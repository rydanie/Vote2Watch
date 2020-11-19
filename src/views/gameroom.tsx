import React from 'react';
import CreateTable from '../components/createtable'
import CookieService from '../components/cookieservice';
import Database from "../db.json";


const GameRoom = (props: any) => {
  let userRoomID = CookieService.get("RoomID");
  let i=0
  
  while (Database.rooms[i]?.roomId != userRoomID && i<Database.rooms.length) {
    i++
  }
  console.log("Search DB for RoomID from Cookie: "+Database.rooms[i]?.roomId)
  console.log("Round of RoomID: "+Database.rooms[i]?.round)

  return (
    <div>
        {/* Room Label */}
        <h1> Game Room #{userRoomID} </h1>

        <div>
            <CreateTable />
        </div>

    </div>
  );
}


export default GameRoom;