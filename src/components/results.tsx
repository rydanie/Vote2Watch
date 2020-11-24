import Axios from 'axios';
import React from 'react';
import { Button } from 'reactstrap';
import Database from "../db.json";
import CookieService from './cookieservice';

// Trash Collection to remove Movies and Rooms from the database at the end of the game
async function FinishGame() {
  
  let resMovies = await Axios.get("/movies/")
  let resRooms = await Axios.get("/rooms/")

  let dataMovies = resMovies.data
  let dataRooms = resRooms.data

  // Adds Movie objects with the same RoomID into an array movieInRoom
  let movieInRoom: number[] = []
  for (let i=0; i < dataMovies.length; i++) {
    if(CookieService.get('RoomID') === dataMovies[i].movieRoomID) {
      movieInRoom.push(dataMovies[i].id)
    }
  }
  DeleteMoviesLoop(movieInRoom)

  for (let i=0; i < dataRooms.length; i++) {
    if(CookieService.get('RoomID') === dataRooms[i].name) {
      Axios.delete('/rooms/'+dataRooms[i].id)
    }
  }
  
}

let j = 0;
async function DeleteMoviesLoop(movieInRoom: number[]) {

  setTimeout(function() {
    console.log("Deleting Movie ID "+movieInRoom[j])
    Axios.delete("/movies/"+movieInRoom[j])
    j++
    if(j < movieInRoom.length){
      DeleteMoviesLoop(movieInRoom);
    }
  }, 500 )
  
}

// Array storing all the movie objects in the room
let ArrayOfMovies: any[] = [];

const Results = (props: any) => {
  
  // Maps out all movies in the database
  Database.movies.map((data, key) => {
      
    // Checks that the movie is in the same roomID as the users cookie. 
    // Pushes movie objects into ArrayOfMovies and sorts by votes
    if (data.movieRoomID.toString() === CookieService.get("RoomID") && Database.movies.length > 1){
      ArrayOfMovies.push(data)
      ArrayOfMovies.sort((a, b) => (b.votes > a.votes)? 1 : -1)
      console.log(ArrayOfMovies)
    }
    return <div />
  })

  // Returns results if there was a three way tie
  if(ArrayOfMovies[0]?.votes === ArrayOfMovies[1]?.votes && ArrayOfMovies[0]?.votes === ArrayOfMovies[2]?.votes){
    return (
      <div>
        <h2>
          <span style={{color: "red"}}>{ArrayOfMovies[0]?.movieName}, {ArrayOfMovies[1]?.movieName}, {ArrayOfMovies[2]?.movieName}
          </span> are in a three way tie with <span style={{color: "red"}}>
          {ArrayOfMovies[0]?.votes}
          </span> votes
        </h2>
        <Button onClick={() => FinishGame()}>Finish Game</Button>
      </div>
    )
  }

  // Returns results if there was a two way tie
  if(ArrayOfMovies[0]?.votes === ArrayOfMovies[1]?.votes){
    return (
      <div>
        <h2>
          <span style={{color: "red"}}>{ArrayOfMovies[0]?.movieName}
          </span> is tied with <span style={{color: "red"}}>{ArrayOfMovies[1]?.movieName}
          </span> as winner with <span style={{color: "red"}}>
          {ArrayOfMovies[0]?.votes}
          </span> votes
        </h2>
        <Button onClick={() => FinishGame()}>Finish Game</Button>
      </div>
    )
  }
  
  // Returns results if there is a single winner
  else{
    return (
      <div>
        <h2> 
          <span style={{color: "red"}}>{ArrayOfMovies[0]?.movieName}
          </span> is the winner with <span style={{color: "red"}}>{ArrayOfMovies[0]?.votes}
          </span> votes
        </h2> 
        <Button onClick={() => FinishGame()}>Finish Game</Button>
      </div>
    )
  }
}

export default Results;