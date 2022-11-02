import React, { useEffect, useState } from 'react';
import './index.scss'
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import { TextField } from '@mui/material'

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cardOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://63626e5437f2167d6f6422e7.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const addToCart = (obj) => {
    setCartItems([...cartItems, obj])
  }

  return (
    <div className="App">
      {cardOpened && 
        <Drawer
          items= {cartItems}
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
          {items.map((item) =>(
            <Card
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onFavorite={() => console.log("Clicked on Favorite")}
              onPlus={(obj) => addToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
