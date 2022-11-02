import React, { useState } from 'react';
import './index.scss'
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import { TextField } from '@mui/material'

const arrCard = [
  {
    title: "WMNS DUNK LOW 'GREEN PAISLEY'",
    price: 175,
    imgUrl: "./img/sneakers/01.jpg"
  },
  
  {
    title: "AIR JORDAN 'BROTHERHOOD'",
    price: 250,
    imgUrl: "./img/sneakers/02.jpg"
  },

  {
    title: "AIR JORDAN 'BROTHERHOOD'",
    price: 180,
    imgUrl: "./img/sneakers/03.jpg"
  },

  {
    title: "AIR JORDAN 'BROTHERHOOD'",
    price: 275,
    imgUrl: "./img/sneakers/04.jpg"
  },

]

function App() {
  const [cardOpened, setCartOpened] = useState(false);
  
  return (
    <div className="App">
      {cardOpened && 
        <Drawer
          onClose= { () => setCartOpened(false)}
        />}  
      <Header
        onClickCart= { () => setCartOpened(true)}
      />
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
          {arrCard.map((obj) =>(
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onClickFavorite={() => console.log("Clicked on Favorite")}
              onClickPlus={() => console.log("Clicked on Plus")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
