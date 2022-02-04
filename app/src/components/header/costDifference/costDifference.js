import React from 'react';

const CostDifference = ({selectedCoins}) => {
  return (
    <div>
      <span>$</span>
      {selectedCoins.length && selectedCoins.reduce((acc, item) => {
        return acc + Number(item.price).toFixed(2) * item.quantity;
      }, 0)}
    </div>
  );
};

export default CostDifference;
