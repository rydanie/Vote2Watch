import React from 'react';
import CookieService from '../components/cookieservice';
import Database from "../db.json";
import { Button } from 'reactstrap';
import axios from 'axios';

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

  // Increments the rooms round by 1
  const onSubmit = async () => {
    let j = i+1
    let res = await axios.get("/rooms/"+j)
    let data = res.data
    data.round = data.round+1

    axios.put("/rooms/"+j, data)
  }
  
  // Conditional render round #1
  if(roomRound === 1){
    return(
      <div>
      <a href="landingpage"> go to the main page</a>
      {/* Room Label */}
      <h1> - Host View - </h1>
      <h1> Game Room: {userRoomID} </h1>
      <h1>Round #1</h1>
        <div>
            <Button onClick={onSubmit} color="primary">Move To Round #2</Button>{' '}
        </div>
  
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
        <h1> - Host View - </h1>
        <h1> Game Room: {userRoomID} </h1>
        <h1>Round #2</h1>
          <div>
              <Button onClick={onSubmit} color="primary">Move To Round #3</Button>{' '}
          </div>

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