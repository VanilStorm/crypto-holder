import React from 'react';
import styles from './HeaderLayout.module.css'

import MainCoinsLayout from "../../mainCoins/component/MainCoinsLayout";
import CostDifference from "../../costDifference/costDifference";
import PortfolioContainer from "../../../common/portfolioLayout/container/PortfolioContainer";

const HeaderLayout = ({setActive,active,popularCoinsStock}) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <MainCoinsLayout popularCoinsStock={popularCoinsStock}/>
                <CostDifference/>
                <button className={styles.portfolio} onClick={() => setActive(!active)}>Portfolio</button>
            </div>
            {active && <PortfolioContainer active={active} setActive={setActive}/>}
        </div>
    );
};

export default HeaderLayout;