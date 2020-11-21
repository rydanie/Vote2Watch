import React from 'react';
import Database from "../db.json";
import CookieService from '../components/cookieservice';

// Array storing all the movie objects in the room
let ArrayOfMovies: any[] = [];

// Main page element. Maps out movies from the database into the CreateRow Function
const ResultsPage = (props: any) => {
  
  // Maps out all movies in the database
  Database.movies.map((data, key) => {
      
      // Checks that there are movies are in database
      if (Database.movies.length > 1) {

          // Checks that the movie is in the same roomID as the users cookie. 
          // Pushes movie objects into ArrayOfMovies and sorts by votes
          if (data.movieRoomID.toString() === CookieService.get("RoomID")){
            ArrayOfMovies.push(data)
            ArrayOfMovies.sort((a, b) => (b.votes > a.votes)? 1 : -1)
            console.log(ArrayOfMovies)
          }
      }
  })

  // Returns results if there was a two way tie
  if(ArrayOfMovies[0]?.votes === ArrayOfMovies[1]?.votes){
    return (<h2>{ArrayOfMovies[0]?.movieName} is tied with {ArrayOfMovies[2]?.movieName} as winner with {ArrayOfMovies[0]?.votes} votes</h2>)
  }
  
  // Returns results if there is a single winner
  else{
    return (<h2>{ArrayOfMovies[0]?.movieName} is the winner with {ArrayOfMovies[0]?.votes} votes</h2>)
  }
}

export default ResultsPage;