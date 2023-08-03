import { styled } from 'styled-components';

export const TransTable = styled.table`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid black;
  text-align: center;
  text-transform: capitalize;
  background-color: gold;
`;

export const HeadRow = styled.tr`
  text-transform: uppercase;
`;

export const HeadCell = styled.th`
  background-color: #cab749;
  color: #fff;
  padding: 10px 0;
  width: 200px;
`;

export const TableRow = styled.tr`
  border: 2px solid black;
`;
export const TableData = styled.td`
  padding: 10px 0;
  border: 1px solid lightgray;
  background-color: white;
`;
