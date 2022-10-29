import React from 'react';
import { Button } from '@mui/material'
import "./Card.scss";

const Card = (props) => {
    return (
      <div className='card'>
        <img className='imgSneakers' src={props.imgUrl} alt="sneakers"/>
        <img className='unliked' src="/img/unliked.svg" alt="unliked"/>
        <h5>{props.title}</h5>
          <div className='cardButton'>
            <div className='cardPrice'>
              <span>Price: </span>
              <b>{props.price}</b>
            </div>
            <Button 
              size="small" 
              variant="contained"
              >+
            </Button>
          </div>
      </div>
    );
};

export default Card;