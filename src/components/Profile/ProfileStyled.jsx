import { styled } from 'styled-components';

export const Card = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 3px solid gold;
  max-width: 300px;
  max-height: 450px;
  background-color: #fff5ba;
  border-radius: 4px;
  transition: 250ms ease;
  box-shadow: 2px 2px 3px 1px lightgrey;

  &:hover {
    scale: 1.02;
    box-shadow: 4px 4px 5px 1px lightgrey;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Avatar = styled.img`
  border-color: red;
  max-width: 150px;
  border-radius: 50%;
  margin: 35px 0;
  outline: 1px solid gold;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin: 8px 0;
`;

export const UserInfo = styled.span`
  color: #9e9e9e;
  margin-bottom: 8px;
`;

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-between;
  width: 100%;
  margin: 0;
`;

export const StatisticItem = styled.li`
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px gold solid;
  width: 34%;
  background-color: #fff1a1;
`;

export const StatisticName = styled.span`
  margin-bottom: 5px;
`;
