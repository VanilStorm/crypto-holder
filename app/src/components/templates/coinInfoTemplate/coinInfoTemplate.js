import React from 'react';
import styles from './style.module.css'

const CoinInfoTemplate = ({setActiveInfo, currentCoin}) => {
    return (
        <div onClick={() => setActiveInfo(false)} className={styles.wrapper}>
            <div onClick={e => e.stopPropagation()} className={styles.content}>
                <span>Rank {currentCoin.rank}</span>
                <span>Name {currentCoin.name}</span>
                <span>Price {'$' + Number(currentCoin.price).toFixed(3)}</span>
            </div>
        </div>
    );
};

export default CoinInfoTemplate;