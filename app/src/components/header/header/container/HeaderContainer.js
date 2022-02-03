import React, {useCallback, useState} from 'react';
import HeaderLayout from "../component/HeaderLayout";
import {connect} from "react-redux";
import {deleteCoin} from "../../../../redux/reducers/coinReducer/actions/actions";

const HeaderContainer = ({deleteCoin,selectedCoins}) => {
    const [active, setActive] = useState(false)
    const popularCoinsStock = JSON.parse(localStorage.getItem('popularCoins'))

    const handleDeleteCoin = useCallback((name) => deleteCoin(name),[selectedCoins])

    return (
        <div>
            <HeaderLayout active={active} setActive={setActive} selectedCoins={selectedCoins}
                          popularCoinsStock={popularCoinsStock} handleDeleteCoin={handleDeleteCoin}/>
        </div>
    );
};

const mapStateToProps = state => ({
    selectedCoins: state.coinReducer.selectedCoins,

})

export default connect(mapStateToProps,{deleteCoin})(HeaderContainer);