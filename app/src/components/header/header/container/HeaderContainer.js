import React, {useEffect, useState} from 'react';
import HeaderLayout from "../component/HeaderLayout";
import {connect} from "react-redux";

const HeaderContainer = ({}) => {
    const [active, setActive] = useState(false)
    const popularCoinsStock = JSON.parse(localStorage.getItem('popularCoins'))

    return (
        <div>
            <HeaderLayout active={active} setActive={setActive} popularCoinsStock={popularCoinsStock}/>
        </div>
    );
};

const mapStateToProps = state => ({
})

export default connect(mapStateToProps,{})(HeaderContainer);