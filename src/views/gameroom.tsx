import React from 'react';
import CookieService from '../components/cookieservice';
import Database from "../db.json";

import Round1 from "./round1"
import Round2 from "./round2"
import Round3 from "./round3"


const GameRoom = (props: any) => {
  let userRoomID = CookieService.get("RoomID");

  // Finds the index of the roomID (4-digit alphanumeric) based on user cookie
  let i=0
  while (Database.rooms[i]?.name !== userRoomID && i<Database.rooms.length) {
    i++
  }

  // Stores the round the room is in
  let roomRound = Database.rooms[i]?.round
  
  // Conditional render round #1
  if(roomRound === 1){
    return(
      <div>
      <a href="landingpage"> go to the main page</a>
      {/* Room Label */}
      <h1> Game Room: {userRoomID} </h1>
      <h1>Round #1</h1>
  
      <Round1 />
      </div>
    )
  }

  // Conditional render round #2
  if(roomRound === 2){
    return(
      <div>
        <a href="landingpage"> go to the main page</a>
        {/* Room Label */}
        <h1> Game Room: {userRoomID} </h1>
        <h1>Round #2</h1>

        <Round2 />
      </div>
    )
  }

  // Conditional render round #3
  if(roomRound === 3){
    return(
      <div>
        <a href="landingpage"> go to the main page</a>
        {/* Room Label */}
        <h1> Game Room: {userRoomID} </h1>
        <h1>Round #3</h1>

        <Round3 />
      </div>
    )
  }

  // Error if game round is out of range
  else{
    return(
        <h1> Round not Found </h1>
    )
  }
  
}

export default GameRoom;