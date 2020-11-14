import React from 'react';
import { Button, Card, CardText, CardTitle, Col } from 'reactstrap';
import axios from "axios";
import stockData from "../db.json";

var test: any;
const Example = (props: any) => {
    {test = prompt("test usernamed")}
    {axios.post("/users", {
        "name": test
   })}
    {console.log(test)}
    if(test=="1"){
        
 
            return (
              <>
                <a href="landingpage"> go to the main page</a>
                <div className="stock-container">
                  {stockData.movies.map((data, key) => {
                    
                    if(stockData.movies.length > 1){
        
                    
                    return (
                      <div key={key}>
                        <Stock
                          key={key}
                          company={data.id}
                          ticker={data.ticker}
                          stockPrice={data.stockPrice}
                          timeElapsed={data.timeElapsed}
                          roomId={data.roomId}
                        />
                      </div>
                    ); 
                    } 
                  })
                }
        
        
                </div>
               
              </>
            );
          
    }
    if(test=="2"){
        return(
            <h1>render #2</h1>
        );
    }if(test=="3"){
        return(
            <h1>render #3</h1>
        );
    }else{
  return (
    
    <div>
        
      <h1>Conditional Page</h1>
        <a href="landingpage"> Landing Page</a>
        <h1>{test}</h1>
        
        <div>
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>
        </div>

    </div>
  );
}
}

const Stock = ({ company, ticker, stockPrice, timeElapsed, roomId }) => {
    if (!company) return <div />;
    console.log("roomId: "+roomId);
    if(roomId == 1){
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
        return <h1> nope </h1>
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
  //axios.delete("/posts/"+e)
  axios.put("/movies/"+e, data)
  //axios.post("/posts/", data)
}

export default Example;