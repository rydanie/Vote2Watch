import React from 'react';
import { Button } from 'reactstrap';
import SubmitData from "../components/submitdata"
import CookieService from "../components/cookieservice"
import Round1Table from "../components/round1table"

const Example = (props: any) => {
  return (
    <div>
        <SubmitData />
        <Round1Table />

    </div>
  );
}


export default Example;