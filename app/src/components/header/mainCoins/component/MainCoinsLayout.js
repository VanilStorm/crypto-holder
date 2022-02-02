import React from 'react';
import styles from './MainCoinsLayout.module.css'

const MainCoinsLayout = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <span>BTC </span><span>Price</span>
            </div>
            <div>
                <span>ETH </span><span>Price</span>
            </div>
            <div>
                <span>USDT </span><span>Price</span>
            </div>
        </div>
    );
};

export default MainCoinsLayout;