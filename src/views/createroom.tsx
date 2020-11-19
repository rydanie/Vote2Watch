import React from 'react';
import CookieService from "../components/cookieservice"
import axios from "axios";
import SubmitData from "../components/submitdata"

function GenRoomID()  {
    return Math.random().toString(36).slice(2,6).toUpperCase();
}

var HostRoomID = GenRoomID();

axios.post("/rooms", {
    "id": "",
    "roomId": HostRoomID
})


const Example = (props: any) => {
    
   
  return (
    <div>
      <h1>Create A Room Page</h1>
        <a href="landingpage"> go to the main page</a>
        {CookieService.set("RoomID" , HostRoomID, { path: '/' } )}
        <div>
            <h1>Room ID: {HostRoomID}</h1>
        </div>
        <SubmitData />
    </div>
    
  );
  
}


export default Example;