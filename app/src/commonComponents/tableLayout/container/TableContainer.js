import React from 'react';
import TableLayout from "../component/TableLayout";

const TableContainer = ({coinsStock}) => {

    return (
        <div>
            <TableLayout coinsStock={coinsStock}/>
        </div>
    );
};

export default TableContainer;