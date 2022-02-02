import React, {useEffect} from 'react';
import TableContainer from "../../table/container/TableContainer";

const MainBlockComponent = ({coinsStock, handleSelect}) => {
    return (
        <div>
            <TableContainer coinsStock={coinsStock}
                            handleSelect={handleSelect}
            />
        </div>
    );
};

export default MainBlockComponent;