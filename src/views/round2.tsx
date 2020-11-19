import React from 'react';
import CreateTable from '../components/createtable'
import CookieService from "../components/cookieservice"

const Example = (props: any) => {
  return (
    <div>
      <h1>Round #2</h1>
      <h1>Room ID: {CookieService.get("RoomID")}</h1>
        <a href="landingpage"> go to the main page</a>

        <CreateTable />

    </div>
  );
}


export default Example;