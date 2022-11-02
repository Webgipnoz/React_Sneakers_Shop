import React from 'react';
import styles from "./Drawer.module.scss";
import { Button } from '@mui/material';

const Drawer = (props) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.cartHeader}>
                    <h2>Cart</h2>
                    <Button
                        onClick={props.onClose}
                        size="small" 
                        variant="contained"
                        >X
                    </Button>
                </div>
                <div className={styles.cart}>
                    <div className={styles.cartItem}>
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
                <div className={styles.priceCart}>
                    <div className={styles.price}>
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