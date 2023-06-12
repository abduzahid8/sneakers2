import React from 'react';
import styles from './Card.module.scss';
// Подключение scss 
 
  function Card ({title , imageUrl , price , onPlus}) {
    const [isAdded, setIsAdded ] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false)
   
    const onClickPlus = () => {
      onPlus({ title, imageUrl, price });
      setIsAdded(!isAdded);
    }
   const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
   }

    return( 
        <div className={styles.card}>
         <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? '/img/liked.png': '/img/unliked.svg' }alt='unliked'></img>
          </div> 
        <img width={133} height={112} src={imageUrl} alt="img"></img>
        <h5>{title}</h5>

        <div className="d-flex justify-content align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price}руб.</b>            
          </div>
          <div>
            <img className={styles.plus}  onClick={onClickPlus} src={isAdded ?  '/img/checked.svg' : '/img/Plus.png'} alt="Plus"></img>
          </div>
      </div>
      </div>
    )
  }

export default Card;

