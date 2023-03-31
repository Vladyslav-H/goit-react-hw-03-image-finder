import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 3px 5px 24px -9px rgba(0, 0, 0, 0.75);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 3px 5px 24px -9px rgba(0, 0, 0, 0.75) inset;
    color: black;
    background-color: RGBA(255, 213, 49, 0.67);
  }
`;
