import React, {useEffect} from 'react';
import TableContainer from '../../table/container/TableContainer';

const MainBlockComponent = ({coinsStock, handleSelect, selectedCoins}) => {
  return (
    <div>
      <TableContainer coinsStock={coinsStock}
        handleSelect={handleSelect}
        selectedCoins={selectedCoins}
      />
    </div>
  );
};

export default MainBlockComponent;
