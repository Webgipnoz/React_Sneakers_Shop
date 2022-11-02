import React, { useState } from 'react';
import { Button } from '@mui/material'
import styles from "./Card.module.scss";

const Card = ({ imgUrl, title, price, onPlus, onFavorite}) => {
  
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({imgUrl, title, price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite();
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <img className={styles.imgSneakers} src={imgUrl} alt="sneakers"/>
      <img 
        className={styles.unliked}
        onClick={onClickFavorite} 
        src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} 
        alt="unliked"
        />
      <h5>{title}</h5>
        <div className={styles.cardButton}>
          <div className={styles.cardPrice}>
            <span>Price: </span>
            <b>{price}</b>
          </div>
          <Button
            onClick={onClickPlus}
            color={isAdded ? "success" : "secondary"} 
            size="small" 
            variant="contained"
            >{isAdded ? "✔" : "+"}
          </Button>
        </div>
    </div>
    );
};

export default Card;