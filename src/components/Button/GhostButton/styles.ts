import styled, { css } from 'styled-components';

interface IProps {
  color: string,
  isCustomColor?: string | boolean,
}

export const GhostButtonComponent = styled.button<IProps>`
  display: flex;
  align-items: center;

  background: none;

  border: 2px solid
    ${(props) => (props.isCustomColor ? props.color : props.theme[props.color].hover)};

  ${(props) => (props.isCustomColor
    ? css`
          color: ${props.color};
        `
    : css`
          color: ${props.theme[props.color].hover};
        `)}

  font-weight: bold;
  padding: 7px 12px;
  border-radius: 5px;
  transition: 500ms ease;

  &:hover {
    ${(props) => (props.isCustomColor
    ? css`
            background: ${props.color} !important;
          `
    : css`
            background: ${props.theme[props.color].hover} !important;
          `)}
    color: #fff;
  }

  svg {
    margin-right: 7.1px;
  }
`;
