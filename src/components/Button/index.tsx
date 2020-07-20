import React from 'react';

import { FiMeh } from 'react-icons/fi';

import { ButtonComponent } from './styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string,
  children: React.ReactNode,
  icon?: JSX.Element,
}

const Button: React.FC<IButton> = ({
  color, children, icon, ...rest
}) => (
  <ButtonComponent color={color} {...rest}>
    <span>{children?.toString().toUpperCase()}</span>
    {icon}
  </ButtonComponent>
);

Button.defaultProps = {
  color: 'info',
  icon: <FiMeh />,
};

export default Button;
