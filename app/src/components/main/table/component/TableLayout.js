import React from 'react';
import styles from './style.module.css'
import PreSelectedCoinLayout from "../../preSelectedCoinLayout/layout/preSelectedCoinLayout";

const TableLayout = ({
                         coinsStock, handleSelect,
                         active, setActive,
                         setQuantity, quantity,
                         setCurrentCoin, currentCoin
                     }) => {
    return (
        <div>
            <table className={styles.table}>
                <thead className={styles.thead}>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {coinsStock && coinsStock.map((item, index) => (
                    <tr className={styles.tr} key={index}>
                        <td>{item.rank}</td>
                        <td>{item.name}</td>
                        <td>{'$' + item.vwap24Hr}</td>
                        <td onClick={() => {
                            setCurrentCoin({name: item.name, rank: item.rank, price: item.vwap24Hr, quantity: quantity})
                            setActive(true)
                        }}>+</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableLayout;