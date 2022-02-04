import React, {useCallback, useEffect, useState} from 'react';
import TableLayout from '../component/TableLayout';
import PreSelectedCoinLayout from '../../preSelectedCoinLayout/layout/preSelectedCoinLayout';

const TableContainer = ({handleSelect, selectedCoins}) => {
  const [active, setActive] = useState(false);
  const [activeInfo, setActiveInfo] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [currentCoin, setCurrentCoin] = useState({});
  const [currentPage, setPage] = useState(1);

  const pageItems = 15;
  const pages = Math.round(JSON.parse(localStorage.getItem('coins')).length / pageItems);
  const items = JSON.parse(localStorage.getItem('coins'));
  const pagesQuantity = [];
  const paginationItems = [];
  for (let i = 0; i < pages; i++ ) {
    pagesQuantity.push(i + 1);
  }

  for (let i = currentPage * pageItems - pageItems; i < currentPage * pageItems; i++) {
    items[i] !== undefined && paginationItems.push(items[i]);
  }

  const handleSetPage = useCallback((page) => setPage(page), [currentPage]);

  return (
    <div>
      <TableLayout
        active={active}
        setActive={setActive}
        quantity={quantity}
        currentCoin={currentCoin}
        setCurrentCoin={setCurrentCoin}
        pagesQuantity={pagesQuantity}
        paginationItems={paginationItems}
        handleSetPage={handleSetPage}
        activeInfo={activeInfo}
        setActiveInfo={setActiveInfo}

      />
      {active && <PreSelectedCoinLayout active={active}
        setActive={setActive}
        quantity={quantity}
        setQuantity={setQuantity}
        currentCoin={currentCoin}
        setCurrentCoin={setCurrentCoin}
        handleSelect={handleSelect}
        selectedCoins={selectedCoins}

      />}
    </div>
  );
};

export default TableContainer;
