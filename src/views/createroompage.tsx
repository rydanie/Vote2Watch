import React from 'react';
import CookieService from "../components/cookieservice"
import axios from "axios";
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

// Generates random 4 digit alphanumeric code
function GenRoomID()  {
    return Math.random().toString(36).slice(2,6).toUpperCase();
}

// Stores generated roomID
var HostRoomID = GenRoomID();

const CreateRoom = (props: any) => {
    
  let history = useHistory()
  CookieService.set("Votes", 0, { path: '/' } )
  CookieService.set("Deletes", 0, { path: '/' } )
  
  // On submit to start game
  const onSubmit = () => {

    // Creates room in backend
    axios.post("/rooms", {
      "id": "",
      "name": HostRoomID,
      "round": 1
    })
    
    // Sets host user cookie
    CookieService.set("RoomID", HostRoomID, { path: '/' } )
    history.push("/hostgameroom")
  }
  
  return (
    <div>
      <h1>Create A Room</h1>
      <h2>Room ID: {HostRoomID}</h2>
      <Button onClick={onSubmit} color="primary">Start Game</Button>{' '}
    </div>
  );
  
}

export default CreateRoom;