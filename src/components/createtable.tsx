import React from 'react';
import { Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import stockData from "../db.json";
import CookieService from './cookieservice';
import axios from "axios";


const Example = (props: any) => {
  return (
    <><a href="landingpage"> go to the main page</a>
          <div className="stock-container">
              {stockData.movies.map((data, key) => {
                  if (stockData.movies.length > 1) {
                      return (
                          <div key={key}>
                              <Stock
                                  key={key}
                                  company={data.id}
                                  ticker={data.ticker}
                                  stockPrice={data.stockPrice}
                                  timeElapsed={data.timeElapsed}
                                  roomId={data.roomId} />
                          </div>
                      );
                  } else {
                      return (<h1> Database Error </h1>);
                  }
              })}
          </div></>
  );
}

const Stock = ({ company, ticker, stockPrice, timeElapsed, roomId }) => {
    if (!company) return <div />;
    if (roomId.toString() === CookieService.get("1")){
        return (
            <table>
              <tbody>
                <tr>
                  <td>
                    <h5>{company}</h5>
                  </td>
                  <td>
                    <h5>{ticker}</h5>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>{ticker}</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button onClick={(e) => {handleDelete(company)} } >Delete</Button>
                        <Button name='button1' variant="primary" onClick={(e) => {handleVote(company)}} >Vote</Button>{' '}
                      </Card>
                    </Col>
                    
                  </td>
                  <td>
                    <h4>{stockPrice}</h4>
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
  
  const handleDelete = e => {
    axios.delete("movies/"+e)
  }
  
  const handleVote = async e => {
    let res = await axios.get("/movies/"+e)
    let data = res.data
  
    data.stockPrice = data.stockPrice+1
  
    console.log(data)
    axios.put("/movies/"+e, data)
  }


export default Example;