import React, { useEffect, useState } from 'react';
import './index.scss'
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import { TextField } from '@mui/material'

function App() {
  const [items, setItems] = useState([]);
  const [cardOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://63626e5437f2167d6f6422e7.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  });

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
          {items.map((obj) =>(
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
