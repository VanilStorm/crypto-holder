import React from 'react';
import styles from './MainCoinsLayout.module.css';

const MainCoinsLayout = ({popularCoinsStock}) => {
  return (
    <div className={styles.wrapper}>
      {popularCoinsStock && popularCoinsStock.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.name} </span><div>{'$' + Number(item.vwap24Hr).toFixed(2)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MainCoinsLayout;
