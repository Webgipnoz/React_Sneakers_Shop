import React from 'react';
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <div className={styles.headerLeft}>
                <img className={styles.headerLogo} src="/img/logo.svg" alt="Logo"/>
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p>Shop with the best sneakers!</p>
                </div>
            </div>
            <ul className={styles.headerRight}>
            <li>
                <img className={styles.headerCart} src="/img/cart.svg" alt="Cart"/>
                <span>120 Euro</span>
            </li>
            <li>
                <img className={styles.headerUser} src="/img/user.svg" alt="User"/>
            </li>
            </ul>
      </header>
    );
};

export default Header;