import React from 'react';
import styles from './style.module.css'
import PortfolioItemTemplate from "../../../templates/portfolioItemTemplate/PortfolioItemTemplate";

const PortfolioLayout = ({setActive, selectedCoinsStock}) => {
    // window.addEventListener('scroll', setActive(false))
    return (
        <div onClick={() => setActive(false)} className={styles.modal}>
            <div onClick={e => e.stopPropagation()} className={styles.content}>
                {!selectedCoinsStock.length ? <h2>Portfolio is empty!</h2> : <h3 style={{textAlign:'center'}}>Portfolio</h3>}
                {selectedCoinsStock && selectedCoinsStock.map((item, index) => {
                    return <PortfolioItemTemplate key={index}
                        rank={item.rank} name={item.name}
                        quantity={item.quantity} price={item.price}/>
                })}
            </div>
        </div>
    );
};

export default PortfolioLayout;