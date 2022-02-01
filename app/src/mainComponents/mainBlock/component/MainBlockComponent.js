import React, {useEffect} from 'react';
import TableContainer from "../../../commonComponents/tableLayout/container/TableContainer";

const MainBlockComponent = ({coinsStock}) => {
    useEffect(()=> {},[coinsStock])
    return (
        <div>
            <TableContainer coinsStock={coinsStock}/>
        </div>
    );
};

export default MainBlockComponent;