import React from "react";
import "./createserverpage.css";
import Database from "../db.json";
import SubmitData from '../components/submitdata';
import { Button, Card, CardText, CardTitle, Col } from "reactstrap";
import axios from "axios";

export const CreateServerPage = () => {
 
    return (
      <>
        <HomePageHeader />
        <div className="stock-container">
          {Database.movies.map((data, key) => {
            if(Database.movies.length > 1){
            return (
              <div key={key}>
                <CreateTable
                  key={key}
                  id={data.id}
                  movieName={data.movieName}
                  votes={data.votes}
                />
              </div>
            ); 
            }else{
              return(<h1> Database Error </h1>)
            }
          })
        }

        </div>
        <SubmitData />
      </>
    );
  };

const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Testing JSON data entry</h2>
      </header>
    );
  };

const handleDelete = async e => {
  let res = await axios.get("rooms")
  let data = res.data
  let newData = data
  axios.delete("movies/"+e)
 
  axios.post("rooms", newData)
}

const handleVote = async e => {
  let res = await axios.get("/movies/"+e)
  let data = res.data
  
  data.votes = data.votes+1


  axios.put("/movies/"+e, data)
}

  const CreateTable = ({ id, movieName, votes }) => {
    if (!id) return <div />;
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
          </tr>
        </tbody>
      </table>
    );
  };

export default CreateServerPage;