import styled from 'styled-components';

interface IProps {
  color: string,
}

export const ButtonComponent = styled.button<IProps>`
  display: flex;
  align-items: center;

  border-radius: 5px;

  transition: 200ms ease;

  background: ${(props) => props.theme[props.color].default}; 

  padding: 8px 10px;

  font-weight: bold;

  color: #fff;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
