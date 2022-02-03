import React from 'react';
import PortfolioLayout from "../component/portfolioLayout";

const PortfolioContainer = ({active, setActive,handleDeleteCoin}) => {

    const selectedCoinsStock = JSON.parse(localStorage.getItem('selectedCoins'))

    return (
        <div>
            <PortfolioLayout active={active} setActive={setActive}
                             selectedCoinsStock={selectedCoinsStock} handleDeleteCoin={handleDeleteCoin}/>
        </div>
    );
};

export default PortfolioContainer;