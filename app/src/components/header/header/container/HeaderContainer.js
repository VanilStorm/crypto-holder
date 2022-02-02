import React, {useEffect, useState} from 'react';
import HeaderLayout from "../component/HeaderLayout";
import {connect} from "react-redux";

const HeaderContainer = ({selectedCoins}) => {
    const [active, setActive] = useState(false)

    return (
        <div>
            <HeaderLayout active={active} setActive={setActive} selectedCoins={selectedCoins}/>
        </div>
    );
};

const mapStateToProps = state => ({
    selectedCoins: state.coinReducer.selectedCoins
})

export default connect(mapStateToProps,{})(HeaderContainer);