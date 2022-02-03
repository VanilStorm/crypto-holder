import React from 'react';
import PortfolioLayout from "../component/portfolioLayout";

const PortfolioContainer = ({active, setActive}) => {

    const selectedCoinsStock = JSON.parse(localStorage.getItem('selectedCoins'))

    return (
        <div>
            <PortfolioLayout active={active} setActive={setActive} selectedCoinsStock={selectedCoinsStock}/>
        </div>
    );
};

export default PortfolioContainer;