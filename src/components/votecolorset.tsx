import Axios from 'axios';
import React, { useState } from 'react';
import { Button, CardText } from 'reactstrap';
import Database from "../db.json";
import CookieService from './cookieservice';
import { useHistory } from "react-router-dom";





  
  const VoteColorSet = (votes) => {
    const [color, setColor] = useState('black');
    const [oldVote, setOldVote] = useState('');
    
    //setOldVote(votes)
    setTimeout(function(){setOldVote(votes)}, 500 )

    const ColorSet = (votes) => {
      if (oldVote < votes && color === 'black') {
        setColor('green')
        setTimeout( function(){setColor('black')} , 1000 )
      }else if (oldVote > votes && color === 'black') {
        setColor('red')
        setTimeout( function(){setColor('black')} , 1000 )
      }
      return (
        <CardText>Votes: {<span style={{color: color }}>{votes}</span>}</CardText>
        )
    }

    //setTimeout(function(){ColorSet(votes)}, 500 )
    ColorSet(votes)
    return <CardText>Votes: {<span style={{color: color }}>{votes}</span>}</CardText>
  }
  



export default VoteColorSet;