import React, { CSSProperties } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: boolean | null;
  color?: string | number | (string & {}) | undefined;
  size?: boolean | null;
}
interface IColorStyle extends CSSProperties {
  background: string | number | (string & {}) | undefined;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, width = null, color, size = null }) => {
  const colorStyle: IColorStyle = {
    background: color,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(s.root, {
        [s.width]: width === true,
        [s.size]: size === true,
      })}
      style={colorStyle}>
      {children}
    </button>
  );
};

export default Button;
