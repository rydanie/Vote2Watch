import React from 'react';
import Database from "../db.json";
import CookieService from './cookieservice';

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

// Sorts the Array of Movies from most votes to least
ArrayOfMovies.sort((a, b) => (b.votes > a.votes)? 1 : -1)

const Results = (props: any) => {
  
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
      </div>
    )
  }

}

export default Results;