import React from 'react';
import "./Drawer.scss";
import { Button } from '@mui/material'

const Drawer = () => {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className="cartHeader">
                    <h2>Cart</h2>
                    <Button 
                    size="small" 
                    variant="contained"
                    >X
                    </Button>
                </div>
                <div className='cart'>
                    <div className='cartItem'>
                    <img src="/img/sneakers/01.jpg" alt="sneakersImg"/>
                    <div>
                        <p>WMNS DUNK LOW 'GREEN PAISLEY'</p>
                        <b>Price: 175 Euro</b>
                        <Button 
                        size="small" 
                        variant="contained"
                        >X
                        </Button>
                    </div>
                    </div>
                </div>
                <div className="priceCart">
                    <div className="price">
                    <h2>Price</h2>
                    <p>145 Euro</p>
                    </div>
                    <Button 
                    variant="contained" 
                    color="success"
                    size="large">
                        Place your order
                    </Button>
                </div>
            </div>
        </div>    
    );
};

export default Drawer;