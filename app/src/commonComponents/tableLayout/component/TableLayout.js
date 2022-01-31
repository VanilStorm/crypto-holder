import React from 'react';

const TableLayout = ({test}) => {
    console.log(test)
    return (
        <table>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {test && test.map((item, index) =>(
                    <tr key={index}>
                        <td>{item.rank}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableLayout;