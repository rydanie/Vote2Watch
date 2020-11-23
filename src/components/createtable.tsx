import React from 'react';
import { Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import Database from "../db.json";
import CookieService from './cookieservice';
import axios from "axios";

// Makes HTTP request to delete movie from database
const handleDelete = async (e: any) => {
  let addDelete = (CookieService.get("Deletes"))
  addDelete++
  CookieService.set("Deletes", addDelete, { path: '/' } )
  //axios.delete("movies/"+e)

  let res = await axios.get("/movies/"+e)
  let data = res.data
  data.votes = data.votes-1
  axios.put("/movies/"+e, data)
}
  
// Makes HTTP request to increment the movies vote by 1
const handleVote = async (e: any) => {
  let addVote = (CookieService.get("Votes"))
  addVote++
  CookieService.set("Votes", addVote, { path: '/' } )

  let res = await axios.get("/movies/"+e)
  let data = res.data
  data.votes = data.votes+1
  axios.put("/movies/"+e, data)
}

// Renders vote button if the user has voted less than 3 times
const CheckVotesButton = (id) => {
  let Votes: number = CookieService.get("Votes")
  if (Votes < 3){
    return (
          <Button name='button1' variant="primary" onClick={(e) => {handleVote(id)}} >Vote</Button>
    )
  }else{
    return (
      <h5>Out of Votes</h5>
    )
  }
}

// Render the delete button if the user has not voted yet
const CheckDeleteButton = (id) => {
  let Deletes: number = CookieService.get("Deletes")
  if (Deletes < 1){
    return (
      <Button onClick={(e) => {handleDelete(id)} } >Veto</Button>
    )
  }else{
    return (
      <h5>Out of Veto</h5>
    )
  }
}

// Takes in data and creates a card in the flex box if the movies roomID is the same as the roomID in the users cookie
const CreateCard = ({ id, movieName, votes, timeElapsed, roomId }) => {
  if (!id) return <div />;
    if (roomId.toString() === CookieService.get("RoomID")){
      return ( 
        <Col sm="20" style={{width: 200, padding: 5} }>
          <Card body>
            <CardTitle style={{fontSize: '1.5vw'}} > <b> {movieName} </b> </CardTitle>
            <CardText>Votes: {votes}</CardText>
            {CheckVotesButton(id)}

            {CheckDeleteButton(id)}
          </Card>
        </Col>   
        );
      }else{
      return <div />
    }
      
};

// Main page element. Maps out movies from the database into the CreateRow Function
const CreateTablePage = (props: any) => {
    return (
      <>
        <div style={{display: "flex", flexDirection: "row", flexFlow: "row wrap", margin: "6", width: "80%" }}>
          {Database.movies.map((data, key) => {
            if (Database.movies.length > 1) {
              return (
                <div key={key} >
                  
                  <CreateCard
                    key={key}
                    id={data.id}
                    movieName={data.movieName}
                    votes={data.votes}
                    timeElapsed={data.timeElapsed}
                    roomId={data.movieRoomID} />
                </div>
              );
            }else{
              return (<h1> Database Error </h1>);
            }
          })}
        </div>
      </>
    );
}

export default CreateTablePage;