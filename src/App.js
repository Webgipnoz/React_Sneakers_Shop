import './index.scss'
import { Button, TextField } from '@mui/material'

function App() {
  return (
    <div className="App">
      <div className='overlay'>
        <div className='rightSite'>

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
            label="Search" 
            variant="outlined" 
          />
          </div>
        </div>
        
        <div className='catalog'>
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
      
          <div className='card'>
            <img className='imgSneakers' src="/img/sneakers/02.jpg" alt="sneakers"/>
            <img className='unliked' src="/img/unliked.svg" alt="unliked"/>
            
            <h5>AIR JORDAN 'BROTHERHOOD'</h5>
            
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

          <div className='card'>
            <img className='imgSneakers' src="/img/sneakers/03.jpg" alt="sneakers"/>
            <img className='unliked' src="/img/liked.svg" alt="unliked"/>

            <h5>YEEZY BOOST 700 'BRIGHT BLUE'</h5>
            
            <div className='cardButton'>
              <div className='cardPrice'>
                
                <span>Price: </span>
                
                <b>175 Euro</b>
              
              </div>
              
              <Button 
                size="small" 
                variant="contained"
                color="success"
                >✓
              </Button>
            
            </div>
          </div>

          <div className='card'>
            <img className='imgSneakers' src="/img/sneakers/04.jpg" alt="sneakers"/>
            <img className='unliked' src="/img/unliked.svg" alt="unliked"/>
            
            <h5>DUNK LOW 'COMMUNITY GARDEN'</h5>
            
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
        </div>
      </div>
    </div>
  );
}

export default App;
