import Axios from 'axios';
import React from 'react';
import { Button } from 'reactstrap';
import Database from "../db.json";
import CookieService from './cookieservice';
import { useHistory } from "react-router-dom";



// Array storing all the movie objects in the room
let ArrayOfMovies: any[] = [];

// Maps out all movies in the database into ArrayOfMovies
Database.movies.map((data, key) => {
  // Checks that the movie is in the same roomID as the users cookie. 
  if (data.movieRoomID.toString() === CookieService.get("RoomID") && Database.movies.length > 1){
    ArrayOfMovies.push(data)
  }
  return <div />
})

// Sorts the Array of Movies from most votes to least
ArrayOfMovies.sort((a, b) => (b.votes > a.votes)? 1 : -1)



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
  }, 500 )
}

const Results = (props: any) => {

  let history = useHistory()

  // Trash Collection to remove Movies and Rooms from the database at the end of the game
  async function FinishGame() {

  // Calls the delete movie loop with an array of all the movies in the RoomID
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