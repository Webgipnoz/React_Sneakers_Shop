import React from 'react';
import './index.scss'
import Card from './components/Card/Card';
import { Button, TextField } from '@mui/material'

function App() {
  return (
    <div className="App">
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

      <header>
        <div className='headerLeft'>
          <img className='headerLogo' src="/img/logo.svg" alt="Logo"/>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Shop with the best sneakers!</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <img className='headerCart' src="/img/cart.svg" alt="Cart"/>
            <span>120 Euro</span>
          </li>
          <li>
            <img className='headerUser' src="/img/user.svg" alt="User"/>
          </li>
        </ul>
      </header>
      
      <div className='content'>
        <div className='contentSearch'>
          <h1>All Sneakers</h1>
          <div className='search'>
          <TextField 
            id="outlined-basic"  
            variant="outlined" 
          />
          </div>
        </div>
        
        <div className='catalog'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
