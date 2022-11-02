import React from 'react';
import styles from "./Drawer.module.scss";
import { Button } from '@mui/material';

const Drawer = ({ onClose, items = []}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.cartHeader}>
                    <h2>Cart</h2>
                    <Button
                        onClick={onClose}
                        size="small" 
                        variant="contained"
                        >X
                    </Button>
                </div>
                <div className={styles.cart}>
                    {
                        items.map((obj) => (
                            <div className={styles.cartItem}>
                                <img src={obj.imgUrl} alt="sneakersImg"/>
                                <div>
                                <p>{obj.title}</p>
                                <b>Price: {obj.price} Euro</b>
                                <Button 
                                    size="small" 
                                    variant="contained"
                                    >X
                                </Button>
                                </div>
                            </div>
                        ))
                    }
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