import React from 'react';
import CookieService from '../components/cookieservice';
import Database from "../db.json";
import { Button } from 'reactstrap';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import Round1 from "./round1"
import Round2 from "./round2"
import Round3 from "./round3"

// Array storing all the movie objects in the room
let ArrayOfMovies: any[] = [];

// Maps out all movies in the database into ArrayOfMovies
Database.movies.map((data) => {
  // Checks that the movie is in the same roomID as the users cookie
  if (data.movieRoomID.toString() === CookieService.get("RoomID") && Database.movies.length > 1){
    ArrayOfMovies.push(data)
  }
  return <div />
})

// Takes in an array of movie ID's and deletes them from the backend, pausing between each delete.
let j = 0;
async function DeleteMoviesLoop(movieInRoom: any[]) {
  setTimeout(function() {
    console.log("Deleting Movie ID "+movieInRoom[j].id)
    Axios.delete("/movies/"+movieInRoom[j].id)
    j++
    if(j < movieInRoom.length){
      DeleteMoviesLoop(movieInRoom);
    }
  }, 150 )
}

const HostGameRoom = (props: any) => {

  let history = useHistory()

  // Trash Collection to remove Movies and Rooms from the database at the end of the game
  async function FinishGame() {

    // Calls the delete movie recursive loop with an array of all the movies in the RoomID
    DeleteMoviesLoop(ArrayOfMovies)

    // Gets room data from the database
    let resRooms = await Axios.get("/rooms/")
    let dataRooms = resRooms.data

    // Deletes Room from backed. Finds the id of the room based on the users cookie. 
    for (let i=0; i < dataRooms.length; i++) {
      if(CookieService.get('RoomID') === dataRooms[i].name) {
        Axios.delete('/rooms/'+dataRooms[i].id)
      }
    }
    history.push("/");
  
  }

  let userRoomID = CookieService.get("RoomID");

  // Finds the index of the roomID (4-digit alphanumeric) based on user's cookie
  let i=0 
  while (Database.rooms[i]?.name !== userRoomID && i<Database.rooms.length) {
    i++
  }

  // Stores the round the room is in
  let roomRound = Database.rooms[i]?.round

  // Increments the rooms round by 1
  const onSubmit = async () => {
    let j = i+1
    // Gets room data from backend
    let res = await Axios.get("/rooms/"+j)
    let data = res.data
    data.round = data.round+1
    // Puts incremented room data back into backend
    Axios.put("/rooms/"+j, data)
  }
  
  // Conditional render round #1
  if(roomRound === 1){
    return(
      <div style={{margin: '3%'}}>
        {/* Host Room Label */}
        <h2> - Host View - </h2>
        <h2> Room ID: <span style={{fontFamily: 'ubuntu'}}> <b> {userRoomID} </b> </span> </h2>
        <h2>Round #1</h2>
        <Button onClick={onSubmit} color="primary">Move To Round #2</Button>{' '}
        <br /><br />
        <Round1 />
      </div>
    )
  }

  // Conditional render round #2
  if(roomRound === 2){
    return(
      <div style={{margin: '3%'}}>
        {/* Host Room Label */}
        <h2> - Host View - </h2>
        <h2> Room ID: <span style={{fontFamily: 'ubuntu'}}> <b> {userRoomID} </b> </span> </h2>
        <h2>Round #2</h2>
        <div>
            <Button onClick={onSubmit} color="primary">Move To Voting Results</Button>{' '}
        </div>
        <br />
        <Round2 />
      </div>
    )
  }

  // Conditional render round #3
  if(roomRound === 3){
    return(
      <div style={{margin: '3%'}}>
        {/* Host Room Label */}
        <h2> - Host View - </h2>
        <h2> Room ID: <span style={{fontFamily: 'ubuntu'}}> <b> {userRoomID} </b> </span> </h2>
        <h2> Voting Results: </h2>
        <Round3 />
        <Button onClick={() => FinishGame()}>Finish Game</Button>
      </div>
    )
  }

  // Error if game round is out of range or if the room does not exist
  else{
    return(
        <h1> Loading Room </h1>
    )
  }
  
}

export default HostGameRoom;