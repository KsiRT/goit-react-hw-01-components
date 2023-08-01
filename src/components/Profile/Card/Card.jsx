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
