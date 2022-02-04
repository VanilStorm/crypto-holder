import React from 'react';
import styles from './style.module.css';
import PortfolioItemTemplate from '../../../templates/portfolioItemTemplate/PortfolioItemTemplate';

const PortfolioLayout = ({setActive, selectedCoinsStock, handleDeleteCoin}) => {
  return (
    <div onClick={() => setActive(false)} className={styles.modal}>
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        {!selectedCoinsStock.length ? <h2 style={{textAlign: 'center'}}>Portfolio is empty!</h2> : selectedCoinsStock && selectedCoinsStock.map((item, index) => {
          return <PortfolioItemTemplate key={index}
            rank={item.rank} name={item.name}
            quantity={item.quantity} price={item.price} handleDeleteCoin={() => handleDeleteCoin(item.name)}/>;
        })}
      </div>
    </div>
  );
};

export default PortfolioLayout;
