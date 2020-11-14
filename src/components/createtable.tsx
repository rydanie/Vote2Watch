import React from 'react';
import { Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import Database from "../db.json";
import CookieService from './cookieservice';
import axios from "axios";

// Makes HTTP request to delete movie from database
const handleDelete = e => {
    axios.delete("movies/"+e)
}
  
// Makes HTTP request to increment the movies vote by 1
const handleVote = async e => {
    let res = await axios.get("/movies/"+e)
    let data = res.data
  
    data.votes = data.votes+1
    axios.put("/movies/"+e, data)
}

// Takes in data and creates a row in the table if the movies roomID is the same as the roomID in the users cookie
const CreateRow = ({ id, movieName, votes, timeElapsed, roomId }) => {
    if (!id) return <div />;
    if (roomId.toString() === CookieService.get("1")){
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
                        <Button onClick={(e) => {handleDelete(id)} } >Delete</Button>
                        <Button name='button1' variant="primary" onClick={(e) => {handleVote(id)}} >Vote</Button>{' '}
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
          return(<h1> Movie not in RoomID </h1>)
        }
};

// Main page element. Maps out movies from the database into the CreateRow Function
const CreateTablePage = (props: any) => {
  return (
    <>
    <a href="landingpage"> go to the main page</a>
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
                                  roomId={data.roomId} />
                          </div>
                        );
                  } else {
                      return (<h1> Database Error </h1>);
                  }
              })}
          </div>
    </>
  );
}

export default CreateTablePage;