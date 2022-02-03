import React from 'react';
import styles from './style.module.css'

const PreSelectedCoinLayout = ({
                                   setActive, setQuantity, quantity,
                                   currentCoin, handleSelect, setCurrentCoin,
                                   selectedCoins
                               }) => {
    return (
        <div onClick={() => setActive(false)} className={styles.wrapper}>
            <div onClick={e => e.stopPropagation()} className={styles.content}>
                <div>Coin: {currentCoin.name}</div>
                <div className={styles.attributes}>
                    <input type="number"
                           placeholder='Quantity: 1.2'
                           value={quantity}
                           onChange={e => setQuantity(e.target.value)}
                    />
                    <button onClick={() => {
                        if (quantity >= 1) {
                            handleSelect(currentCoin)
                        }
                        setCurrentCoin(currentCoin.quantity = quantity)
                        if(!selectedCoins.length) {
                            localStorage.setItem('selectedCoins', JSON.stringify(currentCoin))
                        }
                        setActive(false)
                    }}>Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PreSelectedCoinLayout;