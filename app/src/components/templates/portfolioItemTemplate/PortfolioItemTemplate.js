import React from 'react';
import styles from './style.module.css'

const PortfolioItemTemplate = ({rank, name, quantity, price}) => {
    return (
        <div className={styles.wrapper}>
            <span>Rank: {rank}</span>
            <span>Name: {name}</span>
            <span>Quantity: {quantity}</span>
            <span>Price: {'$' + ' ' + Number(price).toFixed(2)}</span>
            <button>Delete</button>
        </div>
    );
};

export default PortfolioItemTemplate;