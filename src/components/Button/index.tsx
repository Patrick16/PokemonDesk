import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: boolean | null;
  color?: boolean | null;
  size?: boolean | null;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, width = null, color = null, size = null }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(s.root, {
        [s.width]: width === true,
        [s.color]: color === true,
        [s.size]: size === true,
      })}>
      {children}
    </button>
  );
};

export default Button;
