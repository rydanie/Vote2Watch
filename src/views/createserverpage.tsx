import React from "react";
import "./createserverpage.css";
import stockData from "../db.json";
import SubmitData from '../components/submitdata';
import { Button, Card, CardText, CardTitle, Col } from "reactstrap";
import axios from "axios";



export const Stocks = () => {
 
    return (
      <>
        <a href="landingpage"> go to the main page</a>
        <HomePageHeader />
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

  const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
    if (!company) return <div />;
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
  };
  


export default Stocks;