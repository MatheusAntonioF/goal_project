import React from 'react';

import { GhostButtonComponent } from './styles';

interface IProps {
  color: string,
  isCustomColor?: string | boolean,
  children: React.ReactNode,
  rest: any,
}

const GhostButton:React.FC<IProps> = ({
  color, isCustomColor, children, ...rest
}) => (
  <GhostButtonComponent color={color} isCustomColor={isCustomColor} {...rest}>
    {children}
  </GhostButtonComponent>
);

export default GhostButton;
