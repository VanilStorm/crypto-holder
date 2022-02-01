import React from 'react';

const TableLayout = ({coinsStock}) => {
    return (
        <table style={{width:'36vw', marginTop:'20px'}}>
            <thead style={{fontSize: '17px'}}>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {coinsStock && coinsStock.map((item, index) => (
                <tr key={index}>
                    <td style={{textAlign:'center', paddingBottom:'10px'}}>{item.rank}</td>
                    <td style={{textAlign:'center'}}>{item.name}</td>
                    <td style={{textAlign:'center'}}>{'$' + item.vwap24Hr}</td>
                    <td style={{border: '1px solid black', width:'15px', textAlign:'center'}}>+</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TableLayout;