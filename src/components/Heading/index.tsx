import React, { ReactElement } from 'react';
import './Heading.module.scss';

interface IHeadingProps {
  size?: number | null;
  className: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const getItem = ({ children, tag = 'h1', size }: React.PropsWithChildren<IHeadingProps>): ReactElement => {
  return React.createElement(tag, size ? { style: { fontSize: size } } : null, children);
};

const Heading: React.FC<IHeadingProps> = (parameters) => {
  return getItem(parameters);
};

export default Heading;
