import React from 'react';
import { Button } from '@mui/material'
import styles from "./Card.module.scss";

const Card = (props) => {
    return (
      <div className={styles.card}>
        <img className={styles.imgSneakers} src={props.imgUrl} alt="sneakers"/>
        <img className={styles.unliked} src="/img/unliked.svg" alt="unliked"/>
        <h5>{props.title}</h5>
          <div className={styles.cardButton}>
            <div className={styles.cardPrice}>
              <span>Price: </span>
              <b>{props.price}</b>
            </div>
            <Button 
              size="small" 
              variant="contained"
              >+
            </Button>
          </div>
      </div>
    );
};

export default Card;