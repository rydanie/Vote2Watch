import React from 'react';
import Database from "../db.json";
import CookieService from './cookieservice';

// Takes in data and creates a row in the table if the movies roomID is the same as the roomID in the users cookie
const CreateRow = ({ id, movieName, roomId }) => {
  if (!id) return <div />;
  if (roomId.toString() === CookieService.get("RoomID")){
    return (
        <table>
          <tbody>
            <tr>
              <h2>{movieName}</h2>
            </tr>
          </tbody>
        </table>
      );
    }else{
      return <div /> 
    }
};

// Main page element. Maps out movies from the database into the CreateRow Function
const Round1Table = (props: any) => {
  return (
    <>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <h2 style={{fontSize:40}}> <b> Movies </b> </h2>
            </tr>
          </tbody>
        </table>
          {Database.movies.map((data, key) => {
            if (Database.movies.length > 1) {
              return (
                <div key={key}>
                  <CreateRow
                    key={key}
                    id={data.id}
                    movieName={data.movieName}
                    roomId={data.movieRoomID} />
                </div>
                );
            } else {
                return <div />
            }
          })}
      </div>
    </>
  );
}

export default Round1Table;