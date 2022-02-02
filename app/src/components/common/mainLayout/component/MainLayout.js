import React from 'react';
import styles from './MainLayout.module.css'
import HeaderContainer from "../../../header/header/container/HeaderContainer";

const MainLayout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <HeaderContainer/>
            {children}
        </div>
    );
};

export default MainLayout;