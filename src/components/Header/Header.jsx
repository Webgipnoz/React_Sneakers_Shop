import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
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
    );
};

export default Header;