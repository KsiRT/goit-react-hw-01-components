import { styled } from 'styled-components';

export const Container = styled.section`
  width: 600px;
  height: 300px;
  border: 2px blue solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #d1d1d1;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 35px;
  margin: 50px auto;
  text-align: center;
  color: #ffffff;
`;

export const List = styled.ul`
  margin: 0;
  padding: 40px 35px;
  border-top: 3px solid blue;
  display: flex;
  justify-content: space-between;
  background-color: #8899bb;
`;

export const StatLi = styled.li`
  display: flex;
  gap: 10px;
  padding: 5px;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  transition: 200ms ease;
  :last-child {
    color: #66ff00;
  }
  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;
