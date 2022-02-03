import React from 'react';
import styles from './style.module.css'

const TableLayout = ({
                         paginationItems, setActive,
                         quantity, setCurrentCoin,
                         pagesQuantity, handleSetPage
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
                {paginationItems && paginationItems.map((item, index) => (
                    <tr className={styles.tr} key={index}>
                        <td>{item.rank}</td>
                        <td>{item.name}</td>
                        <td>{'$' + ' ' + Number(item.vwap24Hr).toFixed(2)}</td>
                        <td onClick={() => {
                            setCurrentCoin({name: item.name, rank: item.rank, price: item.vwap24Hr, quantity: quantity})
                            setActive(true)
                        }}>+</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.paginationBtns}>
                {pagesQuantity && pagesQuantity.map((item, index) => {
                    return <div className={styles.page} onClick={() => handleSetPage(item)} key={index}>{item}</div>
                })}
            </div>
        </div>
    );
};

export default TableLayout;