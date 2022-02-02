import React from 'react';
import styles from './style.module.css'

const PortfolioLayout = ({setActive,selectedCoins}) => {
    return (
        <div onClick={() => setActive(false)} className={styles.modal}>
            <div className={styles.content}>
                {!selectedCoins.length && <h2>Portfolio is empty!</h2>}
            </div>
        </div>
    );
};

export default PortfolioLayout;