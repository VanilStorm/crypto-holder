import React from 'react';
import styles from './HeaderLayout.module.css'

import MainCoinsLayout from "../../mainCoins/component/MainCoinsLayout";
import CostDifference from "../../costDifference/costDifference";
import PortfolioLayout from "../../../commonComponents/portfolioLayout/component/portfolioLayout";

const HeaderLayout = ({setActive,active,selectedCoins}) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <MainCoinsLayout/>
                <CostDifference/>
                <button className={styles.portfolio} onClick={() => setActive(!active)}>Portfolio</button>
            </div>
            {active && <PortfolioLayout active={active} setActive={setActive} selectedCoins={selectedCoins}/>}
        </div>
    );
};

export default HeaderLayout;