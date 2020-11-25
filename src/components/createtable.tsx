import React from 'react';
import { Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import Database from "../db.json";
import CookieService from './cookieservice';
import Axios from "axios";
  
// Makes HTTP request to increment the movies vote by 1
const handleVote = async (e: any) => {
  let addVote = (CookieService.get("Votes"))
  addVote++
  CookieService.set("Votes", addVote, { path: '/' } )

  let res = await Axios.get("/movies/"+e)
  let data = res.data
  data.votes = data.votes+1
  Axios.put("/movies/"+e, data)
}

// Makes HTTP request to increment the movies vote by -1
const handleVeto = async (e: any) => {
  let addVeto = (CookieService.get("Vetos"))
  addVeto++
  CookieService.set("Vetos", addVeto, { path: '/' } )

  let res = await Axios.get("/movies/"+e)
  let data = res.data
  data.votes = data.votes-1
  Axios.put("/movies/"+e, data)
}

// Renders vote button if the user has voted less than 3 times
const CheckVotesButton = (id: any) => {
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

// Render the veto button if the user has not vetoed yet
const CheckVetoButton = (id: any) => {
  let Veto: number = CookieService.get("Vetos")
  if (Veto < 1){
    return (
      <Button onClick={(e) => {handleVeto(id)} } >Veto</Button>
    )
  }else{
    return (
      <h5>Out of Veto</h5>
    )
  }
}

// Main page element. Maps out movies from the database into the CreateCard Function
const CreateTablePage = (props: any) => {

  // Creates a single reactstrap card with movie and voting information
  const CreateCard = ({ id, movieName, votes, roomId }) => {
    if (!id) return <div />;
      if (roomId.toString() === CookieService.get("RoomID")){
        return ( 
          <Col sm="20" style={{width: 200, padding: 5} }>
            <Card body>
              <CardTitle style={{fontSize: '20px'}} > <b> {movieName} </b> </CardTitle>
              {<CardText>Votes: {<span style={{color: 'black' }}>{votes}</span>}</CardText>}
              {CheckVotesButton(id)}
              <br />
              {CheckVetoButton(id)}
            </Card>
          </Col>   
          );
        }else{
        return <div />
      } 
  };

  // Maps movies into cards to be added to flexbox
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