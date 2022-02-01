import React, {useEffect} from 'react';
import MainBlockComponent from "../component/MainBlockComponent";
import {connect} from "react-redux";
import {getAllCoins} from "../../../redux/reducers/coinReducer/coinReducer";

const MainBlockContainer = ({allCoins,popularCoins,getAllCoins}) => {

    useEffect(()=> {
        if(!localStorage.length) {
            getAllCoins()
            localStorage.setItem('coins', JSON.stringify(allCoins))
            localStorage.setItem('popularCoins', JSON.stringify(popularCoins))
        }
        if(JSON.parse(localStorage.getItem('coins')) !== {}) {
            localStorage.clear()
        }
    },[])

    const coinsStock = JSON.parse(localStorage.getItem('coins'))

    console.log(popularCoins)
    return (
        <div>
            <MainBlockComponent coinsStock={coinsStock} />
        </div>
    );
};

const mapStateToProps = state => ({
    allCoins: state.coinReducer.allCoins,
    popularCoins: state.coinReducer.popularCoins
})

export default connect(mapStateToProps, {getAllCoins})(MainBlockContainer);