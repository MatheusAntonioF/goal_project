import React from 'react';

import { ButtonComponent } from './styles';

interface IButton {
  color: string,
  isCustomColor?: string | boolean,
  rest: any,
  children: React.ReactNode,
}

const Button: React.FC<IButton> = ({
  color, isCustomColor, children, ...rest
}) => (
  <ButtonComponent color={color} isCustomColor={isCustomColor} {...rest}>
    {children}
  </ButtonComponent>
);

export default Button;
