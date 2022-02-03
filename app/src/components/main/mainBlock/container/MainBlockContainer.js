import React, {useCallback, useEffect} from 'react';
import MainBlockComponent from "../component/MainBlockComponent";
import {connect} from "react-redux";
import {getAllCoins, setSelectedCoins} from "../../../../redux/reducers/coinReducer/actions/actions";

const MainBlockContainer = ({allCoins, popularCoins, getAllCoins, setSelectedCoins, selectedCoins}) => {

    useEffect(() => {
        if (!localStorage.length) {
            getAllCoins()
        }
    }, [allCoins])

    useEffect(() => {
        if (!localStorage.length) {
            localStorage.setItem('coins', JSON.stringify(allCoins))
            localStorage.setItem('popularCoins', JSON.stringify(popularCoins))
        }
    }, [allCoins])

    useEffect(() => {
        // Boolean(selectedCoinsStock.length) && setSelectedCoins(selectedCoinsStock)
        // Boolean(selectedCoins.length) && localStorage.setItem('selectedCoins', JSON.stringify(selectedCoins))
    }, [selectedCoins])

    const selectedCoinsStock = JSON.parse(localStorage.getItem('selectedCoins'))
    const coinsStock = JSON.parse(localStorage.getItem('coins'))

    console.log(selectedCoinsStock)
    const handleSelect = useCallback((coin) => setSelectedCoins(coin), [])

    return (
        <div>
            <MainBlockComponent coinsStock={coinsStock} handleSelect={handleSelect} selectedCoins={selectedCoins}/>
        </div>
    );
};

const mapStateToProps = state => ({
    allCoins: state.coinReducer.allCoins,
    popularCoins: state.coinReducer.popularCoins,
    selectedCoins: state.coinReducer.selectedCoins,

})

export default connect(mapStateToProps, {getAllCoins, setSelectedCoins})(MainBlockContainer);