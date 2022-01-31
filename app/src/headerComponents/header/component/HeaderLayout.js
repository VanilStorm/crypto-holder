import React from 'react';
import styles from './HeaderLayout.module.css'

import MainCoinsLayout from "../../mainCoins/component/MainCoinsLayout";
import CostDifference from "../../costDifference/costDifference";
import PortfolioLayout from "../../portfolio/component/PortfolioLayout";

const HeaderLayout = ({}) => {
    return (
        <div className={styles.wrapper}>
            <MainCoinsLayout/>
            <CostDifference/>
            <PortfolioLayout/>
        </div>
    );
};

export default HeaderLayout;