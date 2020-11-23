import React, { useState } from 'react';
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


// Main page element. Maps out movies from the database into the CreateRow Function
const CreateTablePage = (props: any) => {

  const [oldVote, setOldVote] = useState('');
  const [color, setColor] = useState('black');

  const CreateCard = ({ id, movieName, votes, timeElapsed, roomId }) => {
    if (!id) return <div />;
      if (roomId.toString() === CookieService.get("RoomID")){
        return ( 
          <Col sm="20" style={{width: 200, padding: 5} }>
            <Card body>
              <CardTitle style={{fontSize: '20px'}} > <b> {movieName} </b> </CardTitle>
              {/*setVotes(votes)*/}
              {setOldVote(votes)}
              {CheckVoteChange(votes)}
              {/*<CardText>Votes: {<span style={{color: 'black' }}>{votes}</span>}</CardText>*/}
              {CheckVotesButton(id)}
              {CheckDeleteButton(id)}
            </Card>
          </Col>   
          );
        }else{
        return <div />
      }
        
  };

  

  const CheckVoteChange = (votes) => {
    
    console.log("votes: "+votes.toString()+" votes1: "+oldVote.toString())
    if (oldVote !== votes) {
      console.log('if statement works')

      //setVotes(votes)
      setColor('green')
      //setTimeout( function(){setColor('red')} , 1000 )
      setTimeout( function(){setColor('black')} , 3000 )

      return (
        <CardText>Votes: {<span style={{color: color }}>{votes}</span>}</CardText>
        )
    }else{
      return (
        <CardText>Votes: {<span style={{color: color }}>{votes}</span>}</CardText>
        )
    }
    
    
  }
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