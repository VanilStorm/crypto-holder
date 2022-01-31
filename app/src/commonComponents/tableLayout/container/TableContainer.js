import React from 'react';
import TableLayout from "../component/TableLayout";

const TableContainer = () => {
    const test = [
        {rank: 1, name: 'BTC', price: '50.00$', cap: '1.00$'},
        {rank: 1, name: 'BTC', price: '50.00$', cap: '1.00$'},
        {rank: 1, name: 'BTC', price: '50.00$', cap: '1.00$'},
        {rank: 1, name: 'BTC', price: '50.00$', cap: '1.00$'},
        {rank: 1, name: 'BTC', price: '50.00$', cap: '1.00$'},
    ]

    return (
        <div>
            <TableLayout test={test}/>
        </div>
    );
};

export default TableContainer;