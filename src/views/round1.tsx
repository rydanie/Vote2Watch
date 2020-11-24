import React from 'react';
import SubmitData from "../components/submitdata"
import Round1Table from "../components/round1table"

const Round1 = (props: any) => {
  return (
    <div>
      <SubmitData />
      <Round1Table />
    </div>
  );
}

export default Round1;