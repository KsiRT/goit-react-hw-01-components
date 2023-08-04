import React from 'react';
import PropTypes from 'prop-types';
import {
  HeadCell,
  HeadRow,
  TableData,
  TableRow,
  TransTable,
} from './TransactionsStyled';

export function Transactions({ data }) {
  return (
    <TransTable>
      <thead>
        <HeadRow>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </HeadRow>
      </thead>

      <tbody>
        {data.map((data, index) => {
          return (
            <TableRow key={data.id} odd={index % 2 === 0}>
              <TableData>{data.type}</TableData>
              <TableData>{data.amount}</TableData>
              <TableData>{data.currency}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </TransTable>
  );
}

Transactions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
