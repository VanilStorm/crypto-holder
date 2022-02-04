import React from 'react';
import styles from './style.module.css';
import CoinInfoTemplate from '../../../templates/coinInfoTemplate/coinInfoTemplate';

const TableLayout = ({
  paginationItems, setActive,
  quantity, setCurrentCoin,
  pagesQuantity, handleSetPage,
  setActiveInfo, activeInfo,
  currentCoin,
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
            <tr onClick={() => {
              setCurrentCoin({name: item.name, rank: item.rank, price: item.vwap24Hr});
              setActiveInfo(true);
            } } className={styles.tr} key={index}>
              <td>{item.rank}</td>
              <td>{item.name}</td>
              <td>{'$' + ' ' + Number(item.vwap24Hr).toFixed(3)}</td>
              <td onClick={(e) => {
                e.stopPropagation();
                setCurrentCoin({name: item.name, rank: item.rank, price: item.vwap24Hr, quantity: quantity});
                setActive(true);
              }}>+</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationBtns}>
        {pagesQuantity && pagesQuantity.map((item, index) => {
          return <div className={styles.page} onClick={() => handleSetPage(item)} key={index}>{item}</div>;
        })}
      </div>
      {activeInfo && <CoinInfoTemplate setActiveInfo={setActiveInfo} currentCoin={currentCoin}/>}
    </div>
  );
};

export default TableLayout;
