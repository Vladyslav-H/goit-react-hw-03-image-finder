import styled from 'styled-components';

export const GalleryItem = styled.li`
 border-radius: 4px;
  background-color: rgb(164, 164, 164);
  box-shadow: -7px 5px 14px 1px rgba(0, 0, 0, 0.79);
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
