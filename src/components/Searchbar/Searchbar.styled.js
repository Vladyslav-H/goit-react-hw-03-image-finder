import styled from 'styled-components';

export const Header = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  border: transparent;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: aquamarine;
  box-shadow: 0px 15px 24px -9px rgba(0, 0, 0, 0.75);

  background-image: repeating-radial-gradient(
    circle at top,
    RGBA(255, 213, 49, 0.67),
    #059cff 900px
  );
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  height: 30px;
  color: whitesmoke;
  background-color: #3f51b5;
  box-shadow: 3px 5px 24px -9px rgba(0, 0, 0, 0.75);
  border: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 3px 5px 24px -9px rgba(0, 0, 0, 0.75) inset;
    color: black;
    background-color: RGBA(255, 213, 49, 0.67);
  }
`;
export const InputStyled = styled.input`
  min-width: 70px;
  height: 30px;
  border-radius: 5px;
  margin-right: 20px;
  outline: none;
  border: none;
`;
