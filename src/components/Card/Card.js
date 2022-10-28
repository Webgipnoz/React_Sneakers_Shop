import React from 'react';
import { Button } from '@mui/material'

const Card = () => {
    return (
        <div className='card'>
            <img className='imgSneakers' src="/img/sneakers/01.jpg" alt="sneakers"/>
            <img className='unliked' src="/img/unliked.svg" alt="unliked"/>

            <h5>WMNS DUNK LOW 'GREEN PAISLEY'</h5>
        
            <div className='cardButton'>
                <div className='cardPrice'>
            
                    <span>Price: </span>
            
                    <b>175 Euro</b>
          
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