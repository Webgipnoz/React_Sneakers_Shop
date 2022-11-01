import React, { useState } from 'react';
import { Button } from '@mui/material'
import styles from "./Card.module.scss";

const Card = (props) => {
  
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <img className={styles.imgSneakers} src={props.imgUrl} alt="sneakers"/>
      <img 
        className={styles.unliked}
        onClick={onClickFavorite} 
        src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} 
        alt="unliked"
        onClickFavorite=""
        />
      <h5>{props.title}</h5>
        <div className={styles.cardButton}>
          <div className={styles.cardPrice}>
            <span>Price: </span>
            <b>{props.price}</b>
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