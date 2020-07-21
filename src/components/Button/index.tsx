import React from 'react';

import { ButtonComponent } from './styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string,
  children: React.ReactNode,
}

const Button: React.FC<IButton> = ({
  color, children, ...rest
}) => (
  <ButtonComponent color={color} {...rest}>
    {children}
  </ButtonComponent>
);

Button.defaultProps = {
  color: 'info',
};

export default Button;
