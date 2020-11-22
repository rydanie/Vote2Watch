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
  axios.delete("movies/"+e)
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

const CheckDeleteButton = (id) => {
  let Deletes: number = CookieService.get("Deletes")
  if (Deletes < 1){
    return (
      <Button onClick={(e) => {handleDelete(id)} } >Delete</Button>
    )
  }else{
    return (
      <h5>Out of Deletes</h5>
    )
  }
}

// Takes in data and creates a row in the table if the movies roomID is the same as the roomID in the users cookie
const CreateRow = ({ id, movieName, votes, timeElapsed, roomId }) => {
  if (!id) return <div />;
    if (roomId.toString() === CookieService.get("RoomID")){
      return (
        <table>
          <tbody>
            <tr>
              <td>
                <h5>{id}</h5>
              </td>
              <td>
                <h5>{movieName}</h5>
                <Col sm="6">
                  <Card body>
                    <CardTitle>{movieName}</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    {CheckDeleteButton(id)}
                    {CheckVotesButton(id)}
                  </Card>
                </Col>
              </td>
              <td>
                <h4>{votes}</h4>
              </td>
              <td>
                <p>{timeElapsed}</p>
              </td>
            </tr>
          </tbody>
        </table>
        );
      }else{
      return <div />
    }
      
};

// Main page element. Maps out movies from the database into the CreateRow Function
const CreateTablePage = (props: any) => {
  let Votes: number = CookieService.get("Votes")
    return (
      <>
        <div className="stock-container">
          {Database.movies.map((data, key) => {
            if (Database.movies.length > 1) {
              return (
                <div key={key}>
                  <CreateRow
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