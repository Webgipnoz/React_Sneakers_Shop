import './index.scss'

function App() {
  return (
    <div className="App">
      <header>
        <div className='headerLeft'>
          <svg/>
          <div className='headerInfo'>
            <h3>React Sneakers</h3>
            <p>Shop with the best sneakers!</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <svg/>
            <span>120 Euro</span>
          </li>
          <li>
            <svg/>
          </li>
        </ul>
      </header>
      <div className='content'>
        <h1>All Sneakers!</h1>
        ........
      </div>
    </div>
  );
}

export default App;
