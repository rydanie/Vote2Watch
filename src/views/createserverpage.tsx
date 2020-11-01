import React from "react";
import "./createserverpage.css";
import stockData from "../db.json";
import SubmitData from '../components/submitdata';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";

export const Stocks = () => {
    return (
      <>
        <a href="landingpage"> go to the main page</a>
        <HomePageHeader />
        <div className="stock-container">
          {stockData.posts.map((data, key) => {
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
          })}
        
        <div>
          <Row>
            <Col sm="3">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="3">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </div>

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