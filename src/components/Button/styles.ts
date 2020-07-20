import styled, { css } from 'styled-components';

interface IProps {
  color: string,
  isCustomColor?: string | boolean,
}

export const ButtonComponent = styled.button<IProps>`
  display: flex;
  align-items: center;

  ${(props) => (props.isCustomColor
    ? css`
          background: ${props.color} !important;
        `
    : css`
          background: ${props.theme[props.color].default} !important;
          border-color: ${props.theme[props.color].default} !important;
        `)}
  color: #fff;
  font-weight: bold;
  padding: 9px 18px;
  border-radius: 5px;
  transition: 500ms ease;

  &:hover {
    ${(props) => (props.isCustomColor
    ? css`
            background: ${props.color} !important;
          `
    : css`
            background: ${props.theme[props.color].default} !important;
          `)}
  }
`;
