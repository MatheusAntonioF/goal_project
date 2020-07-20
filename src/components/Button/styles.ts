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

  span {
    font-weight: bold;

    width: 80%;

    color: #fff;
  }

  svg {
    margin-left: 5px;
    font-size: 20px;
    color: ${(props) => props.theme.white.default};
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
