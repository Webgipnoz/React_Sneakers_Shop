import './index.scss'
import { Button } from '@mui/material'

function App() {
  return (
    <div className="App">
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
        <h1>All Sneakers</h1>
        <div className='catalog'>
          <div className='card'>
            <img className='imgSneakers' src="/img/sneakers/01.jpg" alt="sneakers"/>
            
            <h5>WMNS DUNK LOW 'GREEN PAISLEY'</h5>
            
            <div className='cardButton'>
              <div className='cardPrice'>
                
                <span>Price: </span>
                
                <b>175 Euro</b>
              
              </div>
              
              <Button size="small" variant="contained">+</Button>
            
            </div>
          </div>
      
          <div className='card'>
            <img className='imgSneakers' src="/img/sneakers/02.jpg" alt="sneakers"/>
            
            <h5>AIR JORDAN 'BROTHERHOOD'</h5>
            
            <div className='cardButton'>
              <div className='cardPrice'>
                
                <span>Price: </span>
                
                <b>175 Euro</b>
              
              </div>
              
              <Button size="small" variant="contained">+</Button>
            
            </div>
          </div>

          <div className='card'>
            <img className='imgSneakers' src="/img/sneakers/03.jpg" alt="sneakers"/>
            
            <h5>YEEZY BOOST 700 'BRIGHT BLUE'</h5>
            
            <div className='cardButton'>
              <div className='cardPrice'>
                
                <span>Price: </span>
                
                <b>175 Euro</b>
              
              </div>
              
              <Button size="small" variant="contained">+</Button>
            
            </div>
          </div>

          <div className='card'>
            <img className='imgSneakers' src="/img/sneakers/04.jpg" alt="sneakers"/>
            
            <h5>DUNK LOW 'COMMUNITY GARDEN'</h5>
            
            <div className='cardButton'>
              <div className='cardPrice'>
                
                <span>Price: </span>
                
                <b>175 Euro</b>
              
              </div>
              
              <Button size="small" variant="contained">+</Button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
