import React, {useState} from 'react';
import TableLayout from "../component/TableLayout";
import PreSelectedCoinLayout from "../../preSelectedCoinLayout/layout/preSelectedCoinLayout";

const TableContainer = ({coinsStock, handleSelect,}) => {
    const [active, setActive] = useState(false)
    const [quantity, setQuantity] = useState('')
    const [currentCoin, setCurrentCoin] = useState({})

    return (
        <div>
            <TableLayout coinsStock={coinsStock}
                         handleSelect={handleSelect}
                         active={active}
                         setActive={setActive}
                         quantity={quantity}
                         setQuantity={setQuantity}
                         currentCoin={currentCoin}
                         setCurrentCoin={setCurrentCoin}
            />
            {active && <PreSelectedCoinLayout active={active}
                                              setActive={setActive}
                                              quantity={quantity}
                                              setQuantity={setQuantity}
                                              currentCoin={currentCoin}
                                              setCurrentCoin={setCurrentCoin}
                                              handleSelect={handleSelect}

            />}
        </div>
    );
};

export default TableContainer;