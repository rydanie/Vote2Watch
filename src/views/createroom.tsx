import React from 'react';
import CookieService from "../components/cookieservice"
import axios from "axios";
import SubmitData from "../components/submitdata"
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

function GenRoomID()  {
    return Math.random().toString(36).slice(2,6).toUpperCase();
}

var HostRoomID = GenRoomID();




const Example = (props: any) => {
    
  let history = useHistory()

  const onSubmit = () => {
    axios.post("/rooms", {
      "id": "",
      "roomId": HostRoomID,
      "round": 1
    })
    CookieService.set("RoomID", HostRoomID, { path: '/' } )
    history.push("/hostgameroom")
  }
  
  return (
    <div>
      <h1>Create A Room Page</h1>
      <h2>Room ID: {HostRoomID}</h2>
      <Button onClick={onSubmit} color="primary">Start Game</Button>{' '}
    </div>
    
  );
  
}


export default Example;