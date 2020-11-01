/*import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import SubmitMovieTitle from '../components/submitmovietitle';




const Example = (props: any) => {

  
  return (
    <div>
      <h1>Create Server Page</h1>
        <a href="landingpage"> go to the main page</a>
        <SubmitMovieTitle />
    </div>
  );
}


export default Example;*/
import React from "react";
import "./createserverpage.css";
import stockData from "../db.json";
import SubmitData from '../components/submitdata';




var feed = {
    "id": 5,
    "title": "entry 5",
    "author": "Ethan"
};
//stockData.push(feed);

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