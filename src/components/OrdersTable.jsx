import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(name, calories, fat, carbs, protein, date) {
  return { name, calories, fat, carbs, protein, date };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '10-10-2000'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, '10-10-2000'),
  createData('Eclair', 262, 16.0, 24, 6.0, '10-10-2000'),
  createData('Cupcake', 305, 3.7, 67, 4.3, '10-10-2000'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, '10-10-2000'),
];

export default function OrdersTable() {
  return (
    <Table hoverRow>
      <thead>
        <tr>
          <th style={{ width: '20%' }}>Name (40%)</th>
          <th>Order</th>
          <th>Paid&nbsp;(g)</th>
          <th>Cost&nbsp;(g)</th>
          <th>Profit&nbsp;(g)</th>
          <th>Date&nbsp;(g)</th>

        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
            <td>{row.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}